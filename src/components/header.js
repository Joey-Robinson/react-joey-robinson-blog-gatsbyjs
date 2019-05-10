import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Header extends Component {
  state = {
    showing: true,
    text: "",
  }

  toggleHidden = () => {
    this.setState({
      showing: !this.state.showing,
      text: !this.state.text,
    })
  }

  render() {
    return (
      <div className="header">
        <button
          className={
            this.state.text ? "header--button__open" : "header--button__close"
          }
          type="button"
          onClick={this.toggleHidden}
        >
          <span>{this.state.text ? "▼" : "▲"}</span>
        </button>
        <header
          className={
            this.state.showing ? "header__container" : "header__hidden"
          }
        >
          <h1>
            決<span>意</span>
          </h1>
          <nav className="header__container--nav">
            <ul>
              <li>
                <AniLink
                  direction="left"
                  cover
                  to="/"
                  bg="linear-gradient(to left top, #9932cc, #6e39a4, #4d367a, #342d4e, #222222)"
                >
                  Home
                </AniLink>
              </li>
              <li>
                <AniLink
                  direction="right"
                  cover
                  bg="linear-gradient(to right top, #9932cc, #6e39a4, #4d367a, #342d4e, #222222)"
                  to="/portfolio/"
                >
                  Portfolio
                </AniLink>
              </li>
              <li>
                <AniLink
                  direction="right"
                  cover
                  bg="linear-gradient(to right top, #9932cc, #6e39a4, #4d367a, #342d4e, #222222)"
                  to="/about/"
                >
                  About
                </AniLink>
              </li>
              <li>
                <AniLink
                  direction="right"
                  cover
                  bg="linear-gradient(to right top, #9932cc, #6e39a4, #4d367a, #342d4e, #222222)"
                  to="/blog/"
                >
                  Blog
                </AniLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
