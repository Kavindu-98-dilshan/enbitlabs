import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
     emailjs.send(
      'service_z4q3ua9', // e.g. 'service_xxxxxx'
      'template_varj9if', // e.g. 'template_yyyyyy'
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      '5cBZVzNeAyfqj8eS5' // e.g. 'user_xxxxxxxxx'?
    )
    .then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 5000);
    })
    .catch((error) => {
      setIsSubmitting(false);
      alert('Failed to send message. Please try again later.');
      console.error(error);
    });
  };
  return <form onSubmit={handleSubmit} className="space-y-6">
      {isSubmitted ? <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
          <span className="block sm:inline">
            Thank you for your message! We'll get back to you soon.
          </span>
        </div> : null}
      <div>
        <label htmlFor="name" className="block text-dark-purple dark:text-white font-medium mb-2">
          Name
        </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal bg-white dark:bg-dark-purple border-gray-300 dark:border-mid-purple text-dark-purple dark:text-white" />
      </div>
      <div>
        <label htmlFor="email" className="block text-dark-purple dark:text-white font-medium mb-2">
          Email
        </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal bg-white dark:bg-dark-purple border-gray-300 dark:border-mid-purple text-dark-purple dark:text-white" />
      </div>
      <div>
        <label htmlFor="message" className="block text-dark-purple dark:text-white font-medium mb-2">
          Message
        </label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal bg-white dark:bg-dark-purple border-gray-300 dark:border-mid-purple text-dark-purple dark:text-white"></textarea>
      </div>
      <button type="submit" disabled={isSubmitting} className={`w-full bg-teal hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>;
}