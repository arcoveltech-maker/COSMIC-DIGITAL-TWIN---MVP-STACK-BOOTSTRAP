import React from 'react';

const GalaxyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
        <path d="M12 10.5c-1.28 0-2.5.4-3.54 1.17.33.3.69.57 1.08.8.78.45 1.67.7 2.59.7s1.81-.25 2.59-.7c.39-.23.75-.5 1.08-.8C14.5 10.9 13.28 10.5 12 10.5z"></path>
        <circle cx="12" cy="12" r="3" opacity="0.5"></circle>
    </svg>
);


const Header: React.FC = () => {
  return (
    <header className="text-center mb-12 md:mb-16">
      <div className="inline-block p-4 bg-primary-900 rounded-full mb-4 border-2 border-accent-500/30">
        <GalaxyIcon className="w-12 h-12 text-accent-400" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
        Cosmic Digital Twin
      </h1>
      <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
        MVP Stack Bootstrap – Your "Day 1 bring-up" kit for orchestrating the future of digital simulation.
      </p>
    </header>
  );
};

export default Header;
