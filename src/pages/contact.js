import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contact/contact.form"
import ContactList from "../components/contact/contact.list"

const Contact = () => (
  <Layout>
    <section className="contact">
      <div className="contact--opening">
        <h1>Some ways you can get ahold of me:</h1>
        <p>
          There's a few ways to get ahold of me. You can use the form below or
          just contact me directly at one of the listed contact methods.
        </p>
        <ContactForm />
      </div>
      <ContactList />
    </section>
  </Layout>
)

export default Contact
