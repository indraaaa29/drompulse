import React from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';

// Only load and run Agentation in development environment
if (import.meta.env.DEV) {
  try {
    const container = document.createElement('div');
    container.id = 'agentation-root';
    document.body.appendChild(container);

    const root = createRoot(container);
    root.render(React.createElement(Agentation));
    console.log('Agentation successfully mounted.');
  } catch (error) {
    console.error('Failed to mount Agentation:', error);
  }
}
