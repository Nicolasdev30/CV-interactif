import React from 'react';
import SectionTitle from './ui/SectionTitle';
import TimelineItem from './ui/TimelineItem';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16">
      <SectionTitle title="Expérience" englishTitle="Experience" />
      
      <div className="mt-8">
        <TimelineItem 
          date="2022 - 2023"
          title="Projet étudiant - Application de gestion"
          company="Formation CDA"
          description="Développement d'une application de gestion de tâches en équipe dans le cadre de la formation. Utilisation de méthodologies agiles et mise en place d'une architecture MVC."
          tags={['JavaScript', 'React', 'Node.js', 'SQL']}
          isLast={true}
        />
      </div>
    </section>
  );
};

export default Experience;