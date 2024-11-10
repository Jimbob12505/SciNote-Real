// components/CodeEditor.tsx
import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  return (
    <div className="code-editor">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here"
        className="w-full p-4 border rounded-md"
      />
      <div className="mt-4">
        <SyntaxHighlighter language="python" style={docco}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeEditor;
