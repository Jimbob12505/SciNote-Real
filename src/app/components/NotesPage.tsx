'use client';
import React, { useState } from 'react';

import MathEditor from './MathEditor'; 
import CodeEditor from './CodeEditor';
import GraphEditor from './GraphEditor';
import DrawEditor from './DrawEditor';

const NotesPage = () => {
  const [activeTool, setActiveTool] = useState<'math' | 'code' | 'graph' | 'draw'>('math');

  return (
    <div className="container mx-auto p-4">
      {/* Toolbar */}
      <div className="flex space-x-4">
        <button onClick={() => setActiveTool('math')} className="btn">
          Math Equations
        </button>
        <button onClick={() => setActiveTool('code')} className="btn">
          Code Snippets
        </button>
        <button onClick={() => setActiveTool('graph')} className="btn">
          Graphs
        </button>
        <button onClick={() => setActiveTool('draw')} className="btn">
          Draw Diagrams
        </button>
      </div>

      {/* Content Area */}
      <div className="mt-6">
        {activeTool === 'math' && <MathEditor />}
        {activeTool === 'code' && <CodeEditor />}
        {activeTool === 'graph' && <GraphEditor />}
        {activeTool === 'draw' && <DrawEditor />}
      </div>
    </div>
  );
};

export default NotesPage;
