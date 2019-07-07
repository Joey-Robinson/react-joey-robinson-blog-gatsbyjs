import React from "react"
import Typed from "react-typed"

const ContactTyping = () => (
  <>
    <h1>Hey, contact me</h1>
    <Typed
      strings={[
        "if you have questions",
        "if you want to talk",
        "if you want to complain",
        "if you want to confess your sins",
        "if you want to hangout",
        "if you want to collab",
      ]}
      typeSpeed={90}
      backSpeed={110}
      backDelay={1000}
      loop
    />
  </>
)

export default ContactTyping
