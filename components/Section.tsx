import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-accent-500 pl-4">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
