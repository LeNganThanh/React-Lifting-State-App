import React from 'react'

export default function Navbar({ toggleMenu }) {
  return (
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          Library
        </a>
      </div>
      <ul className="nav navbar-nav pull-right">
        <li className="hidden-xs">
          <a href="#about">About us</a>
        </li>
        <li>
          <button onClick={toggleMenu} className="btn btn-lg btn-outline">
            <i className="fa fa-graduation-cap" /> <span>Training</span>
          </button>
        </li>
      </ul>
    </div>
  )
}
