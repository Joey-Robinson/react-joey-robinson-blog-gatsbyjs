import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contact/contact.form"

const Contact = () => (
  <Layout>
    <section className="contact">
      <h1>Some ways you can get ahold of me:</h1>
      <ContactForm />
      <ul className="contact--list">
        <li>
          Email:{" "}
          <a href="mailto:joeyrobinsondev@gmail.com">
            joeyrobinsondev@gmail.com
          </a>
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
    </section>
  </Layout>
)

export default Contact
