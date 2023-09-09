import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CartContent from './components/CartContent/CartContent';
import { DataProvider } from './components/context/DataContext';
import Cards from './components/Cards/Cards';
import Deck from './components/Deck/Deck';
import Tools from './components/Tools/Tools';
import Products from './components/Products/Products';
import ProductsDetails from './components/Products/ProductsDetails';
import NavBar from './components/Navbar/NavBar';

function app() {
  console.log("app")
  return (
    <DataProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/deck' element={<Deck />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cards/:id' element={<Products />} />
          <Route path='/deck/:id' element={<Products />} />
          <Route path='/tools/:id' element={<Products />} />
          <Route path='/products/:id' element={<Products />} />
        </Routes>

      </BrowserRouter>
    </DataProvider>

  );
}

export default app;
