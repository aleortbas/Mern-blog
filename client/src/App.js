import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import NavbarMenu from "./components/navbar/navbar";
import SubscribeForm from "./components/suscribe/suscribeForm";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Blogs from "./components/blogs/blogs";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import PostBlog from "./components/postBlogs/postBlogs";
import FormBlog from "./components/formBlog/form";
import Profile from "./components/profile/profile";
import ProtectedRoute from "./ProtectedRoute";

import { UserProvider } from "./User.Context";

function App() {
  const navigate = useNavigate();

  const shouldRender = () => {
    const isProfile = window.location.pathname.endsWith("/profile");
    return !isProfile;
  };

  return (
    <div className="App">
      <UserProvider>
        <NavbarMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Blogs" element={<ProtectedRoute element={Blogs} />} />
          <Route
            path="/profile"
            element={<ProtectedRoute element={Profile} />}
          />
          <Route path="/FormBlog" element={<FormBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/PostBlog/:post_id" element={<PostBlog />} />
        </Routes>
      </UserProvider>

      {shouldRender() && <SubscribeForm />}
    </div>
  );
}

export default App;
