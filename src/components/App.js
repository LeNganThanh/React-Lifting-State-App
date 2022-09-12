import React from 'react'

import Menu from './Navigations/Menu'
import Header from './Header'

//New created component
import About from './About'
import Footer from './Footer'
//import Navbar from './Navbar'
import Books from './Books'

function App() {
  /* Bonus - can move isMenuOpen inside Menu component but that would not be the idea of "lifting state up" anymore
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
 */
  return (
    <div id="page-wrap">
      <Menu
        pageWrapId="page-wrap"
        /*  
                isOpen={isMenuOpen}
        toggleMenu={toggleMenu} */
      />

      {/*       <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
        <Navbar toggleMenu={toggleMenu} />
      </nav>
 */}
      <Header title="By React" />

      <Books />

      <About />

      <Footer />
    </div>
  )
}

export default App
