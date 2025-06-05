import React from 'react';
import { Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Nicolas Belles. Tous droits réservés.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              Créé avec <Heart size={16} className="mx-1 text-red-500" /> en React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;