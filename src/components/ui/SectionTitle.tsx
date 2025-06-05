import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface SectionTitleProps {
  title: string;
  englishTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, englishTitle }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold inline-block relative">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-600"></span>
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">{englishTitle}</p>
    </div>
  );
};

export default SectionTitle;