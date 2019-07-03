import React from "react"

const ContactList = () => (
  <ul className="contact--list">
    <p>You can find me on the web below:</p>
    <li>
      Email:{" "}
      <a href="mailto:joeyrobinsondev@gmail.com">joeyrobinsondev@gmail.com</a>
    </li>
    <li>
      Twitter:{" "}
      <a
        href="https://twitter.com/joeyrobinsondev"
        target="_blank"
        rel="noopener noreferrer"
      >
        @joeyrobinsondev
      </a>
    </li>
    <li>
      GitHub:{" "}
      <a
        href="https://github.com/Joey-Robinson"
        target="_blank"
        rel="noopener noreferrer"
      >
        Joey-Robinson
      </a>
    </li>
    <li>
      LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/in/joey-robinson/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Joey-Robinson
      </a>
    </li>
  </ul>
)

export default ContactList
