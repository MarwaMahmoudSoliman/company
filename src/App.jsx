import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DetailsBlogs from "./Pages/Blogs/detailsBlogs";
import HomePage from "./Pages/Home/HomePage";
import AboutPage from "./Pages/ABout/AboutPage.jsx";
import Contact from "./Pages/Contact.jsx";
import AllUserPage from "./Pages/Admin/AllUserPage.jsx";
import AddBlogPage from "./Pages/Admin/AddBlogPage.jsx";
import Services from "./Pages/Services.jsx";
import Blogs from "./Pages/Blogs/blogs.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import AllServicesAdminPage from "./Pages/Admin/AllServeices.jsx";
import AddUserPage from "./Pages/Admin/AddUserPage.jsx";
import CompanyPapersPage from "./Pages/User/CompanyPapersPage.jsx";
import Setting from "./Pages/Setting.jsx";
import AllBlogsPage from "./Pages/Admin/AllBlogPage.jsx";
import Address from "./Pages/Address.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // await dispatch(currentUser()).unwrap();
      } catch (error) {
        console.error("Authentication error:", error);
      }
    };
    checkAuthentication();
  });

  return (
    <div className="100%">
      <BrowserRouter>
        <Header />
        <div style={{ minHeight: "78vh" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/DetailsBlogs/:id" element={<DetailsBlogs />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/address" element={<Address />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Register />} />
            <Route path="/admin" element={<Outlet />}>
              <Route path="" element={<AllUserPage />} />
              <Route path="User" element={<AllUserPage />} />
              <Route path="addblog" element={<AddBlogPage />} />
              <Route path="addUSer" element={<AddUserPage />} />
              <Route path="AllServices" element={<AllServicesAdminPage />} />
              <Route path="AllBlog" element={<AllBlogsPage />} />
            </Route>
            <Route path="/user" element={<Outlet />}>
              <Route path="" element={<CompanyPapersPage />} />
              <Route path="companyPapers" element={<CompanyPapersPage />} />
              <Route path="personal" element={<personal />} />
              <Route path="AllServices" element={<AllServicesAdminPage />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
