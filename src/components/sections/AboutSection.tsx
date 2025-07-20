import React from 'react';
import { AwardIcon, TargetIcon, UsersIcon } from 'lucide-react';
export function AboutSection() {
  return <section id="about" className="py-20 bg-white dark:bg-mid-purple transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-purple dark:text-white mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-dark-purple p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-teal mb-4">
              <TargetIcon size={40} />
            </div>
            <h3 className="text-xl font-bold text-dark-purple dark:text-white mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              To empower businesses through innovative technology solutions that
              drive growth and success in an ever-changing digital landscape.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-dark-purple p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-teal mb-4">
              <AwardIcon size={40} />
            </div>
            <h3 className="text-xl font-bold text-dark-purple dark:text-white mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              To be the leading provider of transformative digital solutions,
              recognized for excellence, innovation, and exceptional client
              satisfaction.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-dark-purple p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-teal mb-4">
              <UsersIcon size={40} />
            </div>
            <h3 className="text-xl font-bold text-dark-purple dark:text-white mb-3">
              Our Team
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A diverse group of talented professionals committed to excellence,
              collaboration, and continuous innovation to deliver outstanding
              results.
            </p>
          </div>
        </div>
        <div className="mt-16 bg-gray-50 dark:bg-dark-purple p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our team" className="rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-dark-purple dark:text-white mb-4">
                Who We Are
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Founded in 2010, our company has grown from a small startup to a
                recognized industry leader. We specialize in developing
                cutting-edge solutions that address complex business challenges.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our team consists of experienced professionals with diverse
                backgrounds and expertise, united by a passion for innovation
                and a commitment to excellence. We believe in fostering a
                collaborative environment where creativity thrives and
                exceptional results are achieved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}