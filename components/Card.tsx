import React from 'react';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-primary-900 p-6 rounded-lg border border-primary-800 hover:border-accent-500/50 transition-colors duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="text-accent-400 mr-4">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-slate-400">
        {children}
      </p>
    </div>
  );
};

export default Card;
