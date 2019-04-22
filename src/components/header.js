import React, { Component } from 'react'
import { Link } from 'gatsby'

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
          className={(this.state.text ? "header--button__open" : "header--button__close")}
          type="button"
          onClick={this.toggleHidden}
        >
          {(this.state.text ? '▼' : '▲')}
        </button>
        <header className={(this.state.showing ? 'header__container' : 'header__hidden') }>
        <h1>決<span>意</span></h1>
        <nav className="header__container--nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio/">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog/">Blog</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    )
  }
}

export default Header