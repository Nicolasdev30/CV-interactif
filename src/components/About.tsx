import React from 'react';
import { User, MapPin, Calendar } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <SectionTitle title="À propos" englishTitle="About" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-1">
          <div className="aspect-square w-full max-w-xs mx-auto overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
            <User size={80} className="text-white" strokeWidth={1.5} />
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">Nicolas Belles</h2>
          <h3 className="text-xl text-blue-600 mb-6">Concepteur Développeur d'Applications (en formation)</h3>
          
          <div className="flex items-center mb-4">
            <MapPin size={18} className="mr-2 text-gray-500" />
            <span>BELLEGARDE (OCCITANIE)</span>
          </div>
          
          <div className="flex items-center mb-6">
            <Calendar size={18} className="mr-2 text-gray-500" />
            <span>Disponible à partir du 1 septembre 2025</span>
          </div>
          
          <p className="text-lg leading-relaxed mb-6">
            Actuellement en formation de Concepteur Développeur d'Applications, je suis passionné par le développement
            web et les nouvelles technologies. Motivé et rigoureux, je cherche à développer mes compétences en
            travaillant sur des projets innovants et stimulants.
          </p>
          
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">JavaScript</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">TypeScript</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">HTML/CSS</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Node.js</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">SQL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;