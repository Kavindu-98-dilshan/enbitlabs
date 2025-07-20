import React from 'react';
export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center pt-16 bg-gray-50 dark:bg-dark-purple transition-colors duration-500">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-purple dark:text-white mb-6 animate-[fadeIn_1s]">
              We Build <span className="text-teal">Powerful</span> Digital
              Solutions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg animate-[fadeIn_1s_0.3s_both]">
              Enbit Labs is a forward-thinking IT company specializing in mobile
              app and web development, creating innovative solutions that help
              businesses thrive in the digital age.
            </p>
            <button onClick={scrollToContact} className="bg-teal hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 animate-[fadeIn_1s_0.6s_both] transform hover:scale-105">
              Get in Touch
            </button>
          </div>
          <div className="md:w-1/2 animate-[fadeIn_1s_0.9s_both]">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaboration" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>;
}