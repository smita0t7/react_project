import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Taehyung Blog</h1>
      <p>
        Explore stories, moments, and achievements of Kim Taehyung from BTS.
      </p>
      <Link to="/blogs" style={styles.button}>Explore Blogs</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#e6e6fa",
    color: "#333",
  },
  button: {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#c0c0d0",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default HomePage;
