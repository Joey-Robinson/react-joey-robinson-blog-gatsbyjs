import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contact/contact.form"
import ContactList from "../components/contact/contact.list"
import ResumeDownload from "../components/about/about.resume"
import SEO from "../components/seo"
import ContactTyping from "../components/contact/contact.typing"

const Contact = () => (
  <Layout>
    <SEO
      title="Contact"
      description="Contact Page for Joey Robinson's Website"
      keywords={[
        `Joey Robinson`,
        `Portfolio`,
        `Front-End`,
        `Front-End Development`,
        `React`,
        `GatsbyJS`,
        `Joey Robinson Portfolio`,
      ]}
    />
    <section className="contact">
      <h1 className="contact--heading projects__span">Contact</h1>
      <div className="contact--opening">
        <h1>Some ways you can get ahold of me:</h1>
        <p>
          There's a few ways to get ahold of me. You can use the form below or
          just contact me directly at one of the listed contact methods. I also
          have my resume available for download at the bottom of the page. If,
          for any reason it doesn't work, just contact me another way and I can
          share a copy of it with you.
        </p>
      </div>
      <div className="contact--right">
        <ContactTyping />
      </div>
      <>
        <ContactForm />
      </>
      <ContactList />
      <div className="contact--resume">
        <h1>Resume Download:</h1>
        <ResumeDownload />
      </div>
    </section>
  </Layout>
)

export default Contact
