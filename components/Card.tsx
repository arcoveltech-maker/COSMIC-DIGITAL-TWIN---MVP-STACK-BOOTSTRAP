import React from 'react';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, icon, children }) => {
  return (
    <div className="card rounded-lg p-6 shadow-lg h-full">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-4 text-xl font-bold text-slate-100">{title}</h3>
      </div>
      <p className="text-slate-400">
        {children}
      </p>
    </div>
  );
};

export default Card;