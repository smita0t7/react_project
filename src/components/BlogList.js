import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div style={styles.container}>
      <h2>Blog Posts</h2>
      <ul style={styles.list}>
        {blogs.map((blog) => (
          <li key={blog.id} style={styles.item}>
            <Link to={`/blogs/${blog.id}`} style={styles.link}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    color: "#333",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    margin: "0.5rem 0",
  },
  link: {
    textDecoration: "none",
    color: "#c0c0d0",
    fontWeight: "500",
  },
};

export default BlogList;
