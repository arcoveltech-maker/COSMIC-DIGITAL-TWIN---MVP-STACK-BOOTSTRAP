import React from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <div className="bg-primary-950/50 rounded-lg overflow-hidden border border-primary-800">
      <div className="px-4 py-2 bg-primary-800/50 text-xs text-slate-400 font-mono">
        {language}
      </div>
      <pre className="p-4 text-sm font-mono text-slate-300 overflow-x-auto">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
