import React from "react"

const Footer = () => (
  <footer className="footer">
    <div className="footer--date">
      © {new Date().getFullYear()}, Joey Robinson -&nbsp;
      <a
        style={{ textAlign: "center" }}
        href="https://ko-fi.com/joeyrobinson"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ko-Fi
      </a>
    </div>
    {/* <div className="footer--coffee"></div> */}
  </footer>
)

export default Footer
