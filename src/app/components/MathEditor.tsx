// components/MathEditor.tsx
import React, { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const MathEditor = () => {
  const [equation, setEquation] = useState('');

  return (
    <div className="math-editor">
      <textarea
        value={equation}
        onChange={(e) => setEquation(e.target.value)}
        placeholder="Type your equation here"
        className="w-full p-4 border rounded-md"
      />
      <div className="mt-4">
        <BlockMath math={equation} />
      </div>
    </div>
  );
};

export default MathEditor;
