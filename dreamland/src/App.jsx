import React, {useEffect} from 'react';
import './App.css';
import { AppRouter } from './routers/AppRouter';
import { DreamProvider } from './contexts/DreamContext';

function App() {
  useEffect(() => {
    console.log("Uygulama Çalıştı!");
  }, []);
  return (
    <DreamProvider>
      <AppRouter />
    </DreamProvider>
  )
}
export default App
