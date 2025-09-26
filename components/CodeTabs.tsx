import React, { useState } from 'react';

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
      <div className="border-b border-cosmic-blue-700 mb-4">
        <nav className="-mb-px flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-button text-sm font-medium py-2 px-4 border-b-2 ${
                activeTab === tab.id
                  ? 'active text-accent-cyan-400 border-accent-cyan-400'
                  : 'text-slate-400 border-transparent hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="code-block rounded-lg p-4 text-xs font-mono text-slate-300 overflow-x-auto max-h-96">
        {activeTabData && (
          <pre><code>{activeTabData.content.trim()}</code></pre>
        )}
      </div>
    </div>
  );
};

export default CodeTabs;