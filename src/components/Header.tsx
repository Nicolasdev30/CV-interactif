import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'fr' ? 'en' : 'fr'));
  };

  const downloadCV = () => {
    // Placeholder for CV download functionality
    alert('CV download functionality will be implemented here');
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? `${isDarkMode ? 'bg-gray-800/90 shadow-lg' : 'bg-white/90 shadow-md'} backdrop-blur-sm` 
          : `${isDarkMode ? 'bg-transparent' : 'bg-transparent'}`
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-blue-600">Nicolas</span> Belles
          </h1>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#about" className="hover:text-blue-600 transition-colors">
                  {language === 'fr' ? 'À propos' : 'About'}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-600 transition-colors">
                  {language === 'fr' ? 'Expérience' : 'Experience'}
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-blue-600 transition-colors">
                  {language === 'fr' ? 'Formation' : 'Education'}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-600 transition-colors">
                  {language === 'fr' ? 'Compétences' : 'Skills'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition-colors">
                  {language === 'fr' ? 'Contact' : 'Contact'}
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Change language"
            >
              <Languages size={20} />
              <span className="sr-only">
                {language === 'fr' ? 'Switch to English' : 'Passer au français'}
              </span>
            </button>
            
            <button 
              onClick={downloadCV}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Download CV"
            >
              <Download size={20} />
              <span className="sr-only">Download CV</span>
            </button>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span className="sr-only">
                {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;