// import React from "react";
// import Footer from "./footer.css";
// const Footer = () => {
//   return (
//     <footer style={styles.footer}>
//       <p>© {new Date().getFullYear()} Taehyung Blog. All rights reserved.</p>
//     </footer>
//   );
// };

// const styles = {
//   footer: {
//     textAlign: "center",
//     padding: "1rem",
//     backgroundColor: "#c0c0d0",
//     color: "#fff",
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//   },
// };

// export default Footer;

import React from "react";
//import "./footer.css"; // Make sure you import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © 2025 <strong>Taehyung Blog</strong>. All rights reserved.
      </p>
      <p>
        Built with ❤️ by Smita | <a href="https://github.com">GitHub</a>
      </p>
    </footer>
  );
};

export default Footer;
