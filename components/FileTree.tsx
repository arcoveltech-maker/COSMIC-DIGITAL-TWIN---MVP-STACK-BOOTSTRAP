import React from 'react';

interface FileTreeProps {
  layout: string;
}

const FileTree: React.FC<FileTreeProps> = ({ layout }) => {
  const lines = layout.trim().split('\n');

  return (
    <div className="code-block rounded-lg p-6 text-sm text-slate-400 font-mono overflow-x-auto h-full">
      {lines.map((line, index) => (
        <div key={index} className="whitespace-pre">
          <span>{line}</span>
        </div>
      ))}
    </div>
  );
};

export default FileTree;