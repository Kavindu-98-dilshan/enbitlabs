import React from 'react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-dark-purple text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <img src="/Enbit_logo_2-removebg-preview.png" alt="Enbit Labs Logo" className="h-8 mr-2" />
            <div>
              <h2 className="text-xl font-bold">
                Enbit <span className="text-teal">Labs</span>
              </h2>
              <p className="text-sm text-gray-300 mt-2">
                Innovative digital solutions for modern businesses
              </p>
            </div>
          </div>
          <div className="text-sm text-gray-300">
            &copy; {currentYear} Enbit Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>;
}