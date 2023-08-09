import './App.css'
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConteiner from './pages/ItemListConteiner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Landing from './components/Landing';
function app() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/productos/cartas' />
          <Route path='/productos/folios' />
          <Route path='/productos' element={<ItemListConteiner />} />
          <Route path='/producto/:id' />
          <Route path='/*' element={<h1>404-Not Found</h1>} />
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default app;
