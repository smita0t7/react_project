import React from "react";

const BlogPost = ({ blog }) => {
  return (
    <div style={styles.container}>
      <h1>{blog.title}</h1>
      <p style={styles.date}>{blog.date}</p>
      <div style={styles.content}>{blog.content}</div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    color: "#333",
  },
  date: {
    fontSize: "0.9rem",
    color: "#999",
    marginBottom: "1rem",
  },
  content: {
    fontSize: "1rem",
    lineHeight: "1.6",
  },
};

export default BlogPost;
