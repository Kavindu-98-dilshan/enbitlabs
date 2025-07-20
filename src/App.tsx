import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-purple transition-colors duration-500">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>;
}