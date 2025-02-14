import React, {useEffect} from 'react';
import './App.css';
import { AppRouter } from './routers/AppRouter';
import store from './redux/redux';
import { Provider } from 'react-redux';
// import { DreamProvider } from './contexts/DreamContext';

function App() {
  useEffect(() => {
    console.log("Uygulama Çalıştı!");
  }, []);

  return (  // <DreamProvider> <AppRouter /> </DreamProvider>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
export default App;