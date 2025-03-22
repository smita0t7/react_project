import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import Gallery from "./components/Gallerys.js";
import Footer from "./components/Footer";
import  "./App.css";
import theme from'./Themes/theme';
import { ThemeProvider } from '@mui/material/styles';

// Dummy data for blogs and images (you can replace this with API or dynamic data later)
const blogs = [
  {
    id: 1,
    title: "Taehyung's Journey with BTS",
    date: "January 10, 2025",
    content: "Kim Taehyung, also known as V, joined BTS in 2013. His deep voice and captivating visuals have made him a global icon...",
  },
  {
    id: 2,
    title: "Top 5 Iconic Fashion Looks of Taehyung",
    date: "January 15, 2025",
    content: "Known for his bold and unique fashion sense, Taehyung has redefined the concept of style in the music industry...",
  },
];

const images = [
  
];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogList blogs={blogs} />} />
          <Route
            path="/blogs/:id"
            element={
              <BlogPost
                blog={
                  blogs.find(
                    (blog) => blog.id === parseInt(window.location.pathname.split("/").pop())
                  ) || {}
                }
              />
            }
          />
          <Route path="/gallery" element={<Gallery images={images} />} />
          <Route
            path="/about"
            element={
              <div style={{ padding: "2rem", textAlign: "center" }}>
                <h1>About This Blog</h1>
                <p>
                  This blog is dedicated to Kim Taehyung, a member of BTS, celebrating his
                  achievements, talents, and inspiring journey.
                </p>
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
    </ThemeProvider>
  );
};

export default App;
