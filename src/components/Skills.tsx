import React from 'react';
import SectionTitle from './ui/SectionTitle';

const Skills: React.FC = () => {
  const frontendSkills = [
    'HTML/CSS',
    'JavaScript',
    'React',
    'TypeScript',
    'Responsive Design',
  ];

  const backendSkills = [
    'Node.js',
    'Postgres',
    'API RESTful',
    'MongoDB',
  ];

  const toolsSkills = [
    'Git',
    'VS Code',
    'Figma',
    'Méthodologie Agile',
    'Docker',
  ];

  return (
    <section id="skills" className="py-16">
      <SectionTitle title="Compétences" englishTitle="Skills" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-6 text-center">Front-end</h3>
          <ul className="space-y-2">
            {frontendSkills.map((skill) => (
              <li key={skill} className="text-gray-700 dark:text-gray-300">{skill}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-6 text-center">Back-end</h3>
          <ul className="space-y-2">
            {backendSkills.map((skill) => (
              <li key={skill} className="text-gray-700 dark:text-gray-300">{skill}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-6 text-center">Outils & Méthodes</h3>
          <ul className="space-y-2">
            {toolsSkills.map((skill) => (
              <li key={skill} className="text-gray-700 dark:text-gray-300">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold mb-6">Langues</h3>
        <ul className="space-y-2">
          <li className="text-gray-700 dark:text-gray-300">Français</li>
          <li className="text-gray-700 dark:text-gray-300">Anglais - Niveau technique</li>
          <li className="text-gray-700 dark:text-gray-300">Espagnol</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;