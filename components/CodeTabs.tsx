import React, { useState } from 'react';
import CodeBlock from './CodeBlock';

interface Tab {
  id: string;
  label: string;
  language: string;
  content: string;
}

interface CodeTabsProps {
  tabs: Tab[];
}

const CodeTabs: React.FC<CodeTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="w-full">
      <div className="border-b border-primary-700 mb-4">
        <nav className="-mb-px flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'border-accent-500 text-accent-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-500'
              } whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div>
        {activeTabData && <CodeBlock code={activeTabData.content} language={activeTabData.language} />}
      </div>
    </div>
  );
};

export default CodeTabs;
