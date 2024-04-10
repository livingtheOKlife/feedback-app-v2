import { Link } from 'react-router-dom'

function HeaderContainer () {

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

export default HeaderContainer