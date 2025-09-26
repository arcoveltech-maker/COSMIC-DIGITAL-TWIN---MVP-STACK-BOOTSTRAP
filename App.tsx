import React from 'react';

import Header from './components/Header';
import Section from './components/Section';
import Card from './components/Card';
import FileTree from './components/FileTree';
import CodeTabs from './components/CodeTabs';
import { CORE_COMPONENTS, REPOSITORY_LAYOUT, CODE_SNIPPETS, STRATEGIC_PAYOFFS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-950 text-slate-300 font-sans">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <Header />

        <Section title="Core Components">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_COMPONENTS.map((component) => (
              <Card 
                key={component.title} 
                title={component.title} 
                icon={component.icon}
              >
                {component.description}
              </Card>
            ))}
          </div>
        </Section>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <Section title="Repository Layout">
              <FileTree layout={REPOSITORY_LAYOUT} />
          </Section>

          <Section title="Configuration & Quickstart">
            <CodeTabs tabs={CODE_SNIPPETS} />
          </Section>
        </div>

        <Section title="Strategic Payoff">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRATEGIC_PAYOFFS.map((payoff) => (
               <Card 
                key={payoff.title} 
                title={payoff.title} 
                icon={payoff.icon}
              >
                {payoff.description}
              </Card>
            ))}
          </div>
        </Section>

      </main>
       <footer className="text-center py-6 text-slate-500 text-sm">
          <p>Cosmic Digital Twin MVP Stack Bootstrap</p>
        </footer>
    </div>
  );
};

export default App;
