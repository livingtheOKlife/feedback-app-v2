import MainContainer from '../components/layout/MainContainer'

/**--------------------------------------------------------------------------- About page function
 * 
 * @name About
 * 
 * @function
 * 
 * @returns contents for the '/about' page
 * 
 * @author livingtheOKlife
 * 
 * @date 12.04.2024
 * 
 * -------------------------------------------------- */

function About () {

  // ------------------------- return

  return (

    <MainContainer className='about'>

      <h3>About this Project</h3>

      <p className="xs">Version 2.0.0</p>

      <p className="me">This is a React app to leave feedback for a product or service</p>

    </MainContainer>

  )

}

// --------------------------------------------------------------------------- About page export

export default About