// components/GraphEditor.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GraphEditor = () => {
  const data = {
    labels: [0, 1, 2, 3, 4],
    datasets: [
      {
        label: 'y = x^2',
        data: [0, 1, 4, 9, 16],
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
      },
    ],
  };

  return (
    <div className="graph-editor">
      <h2>Graph of y = x^2</h2>
      <Line data={data} />
    </div>
  );
};

export default GraphEditor;
