import React, { Component } from 'react'
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
                <AniLink direction="left" cover bg="#222222" to="/">Home</AniLink>
              </li>
              <li>
                <AniLink direction="right" cover bg="#222222" to="/portfolio/">Portfolio</AniLink>
              </li>
              <li>
                <AniLink direction="right" cover bg="#222222" to="/about/">About</AniLink>
              </li>
              <li>
                <AniLink direction="right" cover bg="#222222" to="/blog/">Blog</AniLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header