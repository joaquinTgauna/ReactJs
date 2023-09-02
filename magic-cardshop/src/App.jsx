import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CartContent from './components/CartContent/CartContent';
import { DataProvider } from './components/context/DataContext';
function app() {
  console.log("app")
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/cart" element={<CartContent />} />
        </Routes>

      </BrowserRouter>
    </DataProvider>

  );
}

export default app;
