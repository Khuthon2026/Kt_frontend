import { useState } from 'react';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import './App.css';

export default function App() {
  const [appName, setAppName] = useState<string | null>(null);

  if (appName) {
    return <ResultPage appName={appName} onBack={() => setAppName(null)} />;
  }

  return <HomePage onSearch={(name) => setAppName(name)} />;
}
