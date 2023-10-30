import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarMenu from "./components/navbar/navbar";
import SubscribeForm from "./components/suscribe/suscribeForm";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Blogs from "./components/blogs/blogs";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import PostBlog from "./components/postBlogs/postBlogs";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/PostBlog" element={<PostBlog />} />
      </Routes>

      <SubscribeForm />
    </div>
  );
}

export default App;
