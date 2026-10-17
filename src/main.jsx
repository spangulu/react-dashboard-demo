import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const results = [
  { suite: 'Login flow', status: 'Passed' },
  { suite: 'Checkout flow', status: 'Passed' },
  { suite: 'Account settings', status: 'Pending' }
];

function App() {
  return <main><h1>Test Automation Dashboard</h1><p>Illustrative results only. Not real test execution data.</p><section>{results.map(item => <article key={item.suite}><strong>{item.suite}</strong><span>{item.status}</span></article>)}</section></main>;
}

createRoot(document.getElementById('root')).render(<App />);
