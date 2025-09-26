import React from 'react';

interface HeaderProps {
  onGalaxyClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGalaxyClick }) => {
  return (
    <header className="text-center py-12 animate-fade-in">
       <div 
         className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8 cursor-pointer group"
         onClick={onGalaxyClick}
       >
        <div id="galaxy-container" className="absolute inset-0"></div>
        <div className="absolute inset-0 bg-cosmic-blue-950/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-accent-cyan-400 font-bold text-lg">INTERACT</p>
        </div>
       </div>
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-100 uppercase">
        Cosmic Digital Twin
      </h1>
      <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
        An interactive dashboard for the MVP stack bootstrap, designed to bring our universe to your fingertips.
      </p>
    </header>
  );
};

export default Header;