import React, { useState } from 'react'

import SideMenu from './Menus/SideMenu'
import SideMenuItem from './Menus/SideMenuItem'
import Navbar from '../Navbar'

export default function Menu({ pageWrapId }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div>
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu}>
        <h4>
          Next Courses
          <button
            className="btn-link"
            onClick={toggleMenu}
            style={{ cursor: 'pointer' }}
          >
            <i className="fa fa-close pull-right" />
          </button>
        </h4>
        <SideMenuItem link="#">Bootcamp</SideMenuItem>
        <SideMenuItem link="#">Part-time</SideMenuItem>
        <SideMenuItem link="#">Advanced React</SideMenuItem>
        <SideMenuItem link="#">React Native</SideMenuItem>
      </SideMenu>
      <Navbar toggleMenu={toggleMenu} />
    </div>
  )
}

/* const Menu = (props) => (
  <SideMenu isOpen={props.isOpen} toggleMenu={toggleMenu}>
    <h4>
      Next Courses
      <button
        className="btn-link"
        onClick={() => props.toggleMenu()}
        style={{ cursor: 'pointer' }}
      >
        <i className="fa fa-close pull-right" />
      </button>
    </h4>
    <SideMenuItem link="#">Bootcamp</SideMenuItem>
    <SideMenuItem link="#">Part-time</SideMenuItem>
    <SideMenuItem link="#">Advanced React</SideMenuItem>
    <SideMenuItem link="#">React Native</SideMenuItem>
    <Navbar toggleMenu={toggleMenu} />
  </SideMenu>
)

export default Menu */
