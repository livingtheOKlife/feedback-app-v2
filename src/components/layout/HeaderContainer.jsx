import { Link } from 'react-router-dom'

/**--------------------------------------------------------------------------- HeaderContainer component function
 * 
 * @name HeaderContainer
 * 
 * @function
 * 
 * @returns header#header-container and its contents
 * 
 * @author livingtheOKlife
 * 
 * @date 12.04.2024
 * 
 * -------------------------------------------------- */

function HeaderContainer () {

  // ------------------------- return

  return (

    <header id="header-container">
      
      <nav id="main-nav">

        <Link>
          <h2>Feedback UI</h2>
        </Link>

        <div className="links">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </div>
        
      </nav>

    </header>

  )
  
}

// --------------------------------------------------------------------------- HeaderContainer component export

export default HeaderContainer