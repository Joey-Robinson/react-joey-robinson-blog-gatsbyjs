import React from "react"
import { Link } from "gatsby"
import home from "../images/home.svg"

const HomeFab = () => (
  <>
    <div className="fab">
      <Link id="fab--link" to="/">
        <img src={home} alt="Go Home" />
      </Link>
    </div>
  </>
)

export default HomeFab
