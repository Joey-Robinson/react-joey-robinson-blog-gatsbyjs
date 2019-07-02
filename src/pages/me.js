import React from "react"
import Layout from "../components/layout"
import profbg from "../images/profbg.png"
import { Link } from "gatsby"

const Me = () => (
  <Layout>
    <section className="about">
      <h1>About Me</h1>
      <div className="about--professional">
        <Link to="/me/professional/">
          Professional
          <img src={profbg} alt="" />
        </Link>
      </div>
    </section>
  </Layout>
)

export default Me
