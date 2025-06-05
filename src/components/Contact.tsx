import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    alert('Formulaire soumis ! (fonctionnalité à implémenter)');
    console.log(formData);
  };

  return (
    <section id="contact" className="py-16">
      <SectionTitle title="Contact" englishTitle="Contact" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="text-2xl font-bold mb-6">Restons en contact</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
            Je suis ouvert aux propositions de stage, d'alternance ou d'emploi dans le domaine du développement web.
          </p>
          
          <div className="space-y-4">
            <a 
              href="mailto:email@example.com" 
              className="flex items-center group"
            >
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <Mail className="text-blue-600 dark:text-blue-300" size={20} />
              </div>
              <span className="group-hover:text-blue-600 transition-colors">ntk160782@gmail.com</span>
            </a>
            
            <a 
              href="tel:0652927501" 
              className="flex items-center group"
            >
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <Phone className="text-blue-600 dark:text-blue-300" size={20} />
              </div>
              <span className="group-hover:text-blue-600 transition-colors">06 52 92 75 01</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/nicolas-belles-91137a331" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center group"
            >
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <Linkedin className="text-blue-600 dark:text-blue-300" size={20} />
              </div>
              <span className="group-hover:text-blue-600 transition-colors">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center group"
            >
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <Github className="text-blue-600 dark:text-blue-300" size={20} />
              </div>
              <span className="group-hover:text-blue-600 transition-colors">GitHub</span>
            </a>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-bold mb-6">Envoyez-moi un message</h3>
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;