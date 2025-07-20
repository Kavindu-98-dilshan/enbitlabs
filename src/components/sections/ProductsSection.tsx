import React from 'react';
const products = [{
  id: 1,
  title: 'Web Application Development',
  description: 'Custom web applications tailored to your business needs with responsive design and modern technologies.',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 2,
  title: 'Mobile App Development',
  description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experience.',
  image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 3,
  title: 'UI/UX Design',
  description: 'User-centered design solutions that enhance usability and create engaging digital experiences.',
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 4,
  title: 'Cloud Solutions',
  description: 'Scalable cloud infrastructure and services to optimize your application performance and reliability.',
  image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 5,
  title: 'Enterprise Software',
  description: 'Custom enterprise applications that streamline business operations and improve efficiency.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 6,
  title: 'API Development & Integration',
  description: 'Robust API solutions to connect systems and enable seamless data flow across your organization.',
  image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}];
export function ProductsSection() {
  return <section id="products" className="py-20 bg-gray-50 dark:bg-dark-purple transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-purple dark:text-white mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive range of IT solutions designed to help
            your business thrive in today's digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => <div key={product.id} className="bg-white dark:bg-mid-purple rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-purple dark:text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {product.description}
                </p>
                <button className="mt-4 text-teal font-medium hover:text-opacity-80 transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}