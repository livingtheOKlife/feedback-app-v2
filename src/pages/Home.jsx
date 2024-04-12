import FeedbackForm from '../components/FeedbackForm'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackList from '../components/FeedbackList'
import MainContainer from '../components/layout/MainContainer'

/**--------------------------------------------------------------------------- Home page function
 * 
 * @name Home
 * 
 * @function
 * 
 * @returns contents of the '/' page
 * 
 * @author livingtheOKlife
 * 
 * @date 12.04.2024
 * 
 * -------------------------------------------------- */

function Home () {

  // ------------------------- return

  return (
    
    <MainContainer className='home'>

      <FeedbackForm />

      <FeedbackStats />

      <FeedbackList />
      
    </MainContainer>

  )

}

// --------------------------------------------------------------------------- Home page export

export default Home