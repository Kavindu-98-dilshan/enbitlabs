import React from 'react';
import { ContactForm } from '../ContactForm';
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
export function ContactSection() {
  return <section id="contact" className="py-20 bg-white dark:bg-mid-purple transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-purple dark:text-white mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss your digital needs? Get in
            touch with our team, and we'll be happy to assist you.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <ContactForm />
          </div>
          <div className="md:w-1/2 bg-gray-50 dark:bg-dark-purple p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-dark-purple dark:text-white mb-6">
              Enbit Labs Information
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="text-teal mr-4">
                  <MapPinIcon size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-dark-purple dark:text-white">
                    Address
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    No.03, Rambukkana Road, Mawathagama
                    <br />
                    Sri Lanka
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-teal mr-4">
                  <PhoneIcon size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-dark-purple dark:text-white">
                    Phone
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +94 (71) 298-2366
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    +94 (76) 300-3678
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    +94 (71) 640-0882
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-teal mr-4">
                  <MailIcon size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-dark-purple dark:text-white">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    enbit.labs@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-dark-purple dark:text-white mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-teal text-white p-2 rounded-full hover:bg-opacity-90 transition-colors duration-300" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="bg-teal text-white p-2 rounded-full hover:bg-opacity-90 transition-colors duration-300" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="bg-teal text-white p-2 rounded-full hover:bg-opacity-90 transition-colors duration-300" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="bg-teal text-white p-2 rounded-full hover:bg-opacity-90 transition-colors duration-300" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
}