import React, { Component } from 'react'
// import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Header extends Component {
  state = {
    showing: true,
    text: ""
  }

  toggleHidden = () => {
    this.setState({
      showing: !this.state.showing,
      text: !this.state.text
    })
  }

  render() {
    return (
      <div className="header">
        <button
          className={this.state.text ? "header--button__open" : "header--button__close"}
          type="button"
          onClick={this.toggleHidden}
        >
          {this.state.text ? '▼' : '▲'}
        </button>
        <header className={this.state.showing ? 'header__container' : 'header__hidden'}>
          <h1>決<span>意</span></h1>
          <nav className="header__container--nav">
            <ul>
              <li>
                <AniLink swipe direction="left" top="entry" to="/">Home</AniLink>
              </li>
              <li>
                <AniLink swipe top="entry" to="/portfolio/">Portfolio</AniLink>
              </li>
              <li>
                <AniLink swipe top="entry" to="/blog/">Blog</AniLink>
              </li>
              <li>
                <AniLink swipe top="entry" to="/about/">About</AniLink>
              </li>
              <li>
                <AniLink swipe top="entry" to="/contact/">Contact</AniLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header