import { Link } from 'react-router-dom'

import MainContainer from '../components/layout/MainContainer'

function NotFound () {

  return (

    <MainContainer className='not-found'>

      <h2>Oops...</h2>
      
      <p className="la">Page not found!</p>

      <Link to='/' className="btn btn-main">Return Home</Link>
          
    </MainContainer>

  )

}

export default NotFound