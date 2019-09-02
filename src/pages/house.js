import React from "react"
import HouseImage from "../components/house/house.image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const House = () => (
  <Layout>
    <SEO />
    <section className="house">
      <HouseImage />
    </section>
  </Layout>
)

export default House
