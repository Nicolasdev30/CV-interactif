import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16">
      <SectionTitle title="Formation" englishTitle="Education" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-start mb-4">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
              <GraduationCap className="text-blue-600 dark:text-blue-300" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold">Concepteur Développeur d'Applications</h3>
              <p className="text-gray-600 dark:text-gray-300">2025 (en cours)</p>
              <p className="mt-2 font-medium">École O'Clock</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Formation diplômante de niveau 6 (Bac+3/4) axée sur la conception et le développement d'applications
            web et mobiles. Acquisition de compétences en développement front-end, back-end, gestion de bases de
            données et méthodologies de projet. 
            Sur une durée de 8 mois (1050 heures  théoriques), 
            prépare au Titre Professionnel “Concepteur Développeur d’Applications”.
            Format 100 % téléprésentiel (FOAD)
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-start mb-4">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
              <Award className="text-blue-600 dark:text-blue-300" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold">BTS Hôtellerie Restauration</h3>
              <p className="text-gray-600 dark:text-gray-300">2019</p>
              <p className="mt-2 font-medium">Lycée Frédéric Mistral</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            BTS Hôtellerie Restauration, formation complète couvrant la gestion, le service et la cuisine.
            Développement de compétences en gestion d'équipe, service client et organisation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;