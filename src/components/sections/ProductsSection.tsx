import React, { useState } from 'react';
import { ServiceModal } from '../ServiceModal';
const products = [{
  id: 1,
  title: 'Web Application Development',
  description: 'Custom web applications tailored to your business needs with responsive design and modern technologies.',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  detailedDescription: <div className="space-y-4">
        <p>
          We build modern, scalable, and secure web solutions for businesses of
          all sizes. Our web services cover:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Front-end:</strong> React.js, Vue.js, HTML5, CSS3,
            TailwindCSS
          </li>
          <li>
            <strong>Back-end:</strong> Node.js, Laravel, PHP, Firebase, MySQL,
            MongoDB
          </li>
          <li>
            <strong>CMS:</strong> WordPress, Strapi, and custom admin panels
          </li>
          <li>Responsive design for mobile, tablet, and desktop</li>
          <li>SEO optimization and performance tuning</li>
        </ul>
        <p>
          From landing pages to fully integrated web applications, we create
          tailored digital experiences that help your business succeed online.
        </p>
      </div>
}, {
  id: 2,
  title: 'Mobile App Development',
  description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experience.',
  image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  detailedDescription: <div className="space-y-4">
        <p>
          Delivering feature-rich mobile applications with a single codebase for
          both Android and iOS. Why choose Flutter with Enbit Labs?
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Faster time to market</li>
          <li>Native-like performance</li>
          <li>Cost-effective cross-platform solution</li>
          <li>Custom animations and widgets</li>
          <li>Integration with Firebase, REST APIs, and native modules</li>
        </ul>
        <p>
          Ideal for startups, MVPs, and businesses needing consistent UI across
          platforms without compromising on quality.
        </p>
      </div>
}, {
  id: 3,
  title: 'UI/UX Design',
  description: 'User-centered design solutions that enhance usability and create engaging digital experiences.',
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  detailedDescription: <div className="space-y-4">
        <p>
          Our design team creates intuitive and visually appealing interfaces
          that keep users engaged and drive conversions. Our UI/UX services
          include:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>User research and persona development</li>
          <li>Wireframing and prototyping</li>
          <li>Visual design and branding</li>
          <li>Interaction design and animation</li>
          <li>Usability testing and iterative improvements</li>
        </ul>
        <p>
          We focus on creating designs that not only look great but also provide
          exceptional user experiences across all devices.
        </p>
      </div>
}, {
  id: 4,
  title: 'Cloud Solutions',
  description: 'Scalable cloud infrastructure and services to optimize your application performance and reliability.',
  image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  detailedDescription: <div className="space-y-4">
        <p>
          Leverage the power of cloud computing with our comprehensive cloud
          solutions. We help businesses:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Migrate existing applications to cloud platforms</li>
          <li>Design scalable and resilient cloud architectures</li>
          <li>Implement serverless computing solutions</li>
          <li>Set up continuous integration and deployment pipelines</li>
          <li>Monitor and optimize cloud resources for cost-efficiency</li>
        </ul>
        <p>
          Our expertise spans AWS, Google Cloud, and Azure to provide the
          best-fit solutions for your business needs.
        </p>
      </div>
}, {
  id: 5,
  title: 'iOS App Development',
  description: 'High-performing native iOS applications designed for exceptional user experience on Apple devices.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  detailedDescription: <div className="space-y-4">
        <p>
          We develop elegant and high-performing apps for iPhone, iPad, and
          Apple Watch using modern Apple technologies. Our iOS expertise
          includes:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Swift & SwiftUI development</li>
          <li>Integration with iCloud, CoreData, SiriKit, and ARKit</li>
          <li>
            User-centric design following Apple's Human Interface Guidelines
          </li>
          <li>Secure data handling and biometric authentication</li>
          <li>App Store submission, compliance, and updates</li>
        </ul>
        <p>
          We ensure a seamless user experience across all Apple devices with
          pixel-perfect UI and fluid performance.
        </p>
      </div>
}, {
  id: 6,
  title: 'API Development & Integration',
  description: 'Robust API solutions to connect systems and enable seamless data flow across your organization.',
  image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  detailedDescription: <div className="space-y-4">
        <p>
          Create powerful connections between your systems with our API
          development and integration services:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>RESTful and GraphQL API design and development</li>
          <li>Third-party API integration</li>
          <li>API documentation and developer portals</li>
          <li>Microservices architecture</li>
          <li>API security and authentication</li>
        </ul>
        <p>
          We help businesses streamline operations and enable new capabilities
          through seamless system integrations.
        </p>
      </div>
}];
export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const openProductDetails = (productId: number) => {
    setSelectedProduct(productId);
  };
  const closeProductDetails = () => {
    setSelectedProduct(null);
  };
  const selectedProductData = products.find(product => product.id === selectedProduct);
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
                <button onClick={() => openProductDetails(product.id)} className="mt-4 text-teal font-medium hover:text-opacity-80 transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>)}
        </div>
      </div>
      {selectedProductData && <ServiceModal title={selectedProductData.title} description={selectedProductData.description} detailedDescription={selectedProductData.detailedDescription} isOpen={selectedProduct !== null} onClose={closeProductDetails} />}
    </section>;
}