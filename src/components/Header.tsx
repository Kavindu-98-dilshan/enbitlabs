import React, { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { MenuIcon, XIcon } from 'lucide-react';
const navItems = [{
  name: 'Home',
  href: '#home'
}, {
  name: 'About Us',
  href: '#about'
}, {
  name: 'Our Products',
  href: '#products'
}, {
  name: 'Contact Us',
  href: '#contact'
}];
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-dark-purple shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" onClick={() => scrollToSection('#home')} className="flex items-center">
            <img src="/Enbit_logo_2-removebg-preview.png" alt="Enbit Labs Logo" className="h-10 mr-2" />
            <h1 className="text-2xl font-bold text-dark-purple dark:text-white">
              Enbit <span className="text-teal">Labs</span>
            </h1>
          </a>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map(item => <li key={item.name}>
                <a href={item.href} onClick={e => {
              e.preventDefault();
              scrollToSection(item.href);
            }} className="text-dark-purple dark:text-white hover:text-teal dark:hover:text-teal transition-colors duration-300">
                  {item.name}
                </a>
              </li>)}
          </ul>
          <ThemeToggle />
        </nav>
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 text-dark-purple dark:text-white" aria-label="Toggle menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-white dark:bg-dark-purple shadow-lg">
          <ul className="py-4">
            {navItems.map(item => <li key={item.name}>
                <a href={item.href} onClick={e => {
            e.preventDefault();
            scrollToSection(item.href);
          }} className="block py-2 px-4 text-dark-purple dark:text-white hover:bg-gray-100 dark:hover:bg-mid-purple transition-colors duration-300">
                  {item.name}
                </a>
              </li>)}
          </ul>
        </nav>}
    </header>;
}