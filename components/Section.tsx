import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold tracking-tight text-slate-200 border-b-2 border-accent-cyan-500/30 pb-3 mb-8 section-title uppercase">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;