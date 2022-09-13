import React, { useState } from 'react'

import SideMenu from './Menus/SideMenu'
import SideMenuItem from './Menus/SideMenuItem'
import Navbar from '../Navbar'

const Menu = ({ pageWrapId }) => {
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
export default Menu

