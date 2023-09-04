import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarMenu from './components/navbar/navbar';
import SubscribeForm from './components/suscribe/suscribeForm';
import Home from './components/home/home';
import Blogs from './components/blogs/blogs';
import About from './components/about/about';

function App() {
  return (
    <div className="App">

      <NavbarMenu />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<About/>} /> 
        </Routes>
      </BrowserRouter>

      <SubscribeForm />
    </div>
  );
}

export default App;
