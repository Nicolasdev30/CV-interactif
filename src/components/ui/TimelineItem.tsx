import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  date, 
  title, 
  company, 
  description, 
  tags,
  isLast = false 
}) => {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-blue-600"></div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 ml-4 hover:shadow-lg transition-shadow duration-300">
        <div className="text-sm font-medium text-blue-600 mb-2">{date}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{company}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;