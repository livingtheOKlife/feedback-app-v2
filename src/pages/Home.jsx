import FeedbackForm from '../components/FeedbackForm'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackList from '../components/FeedbackList'
import MainContainer from '../components/layout/MainContainer'

function Home () {

  return (
    
    <MainContainer className='home'>

      <FeedbackForm />

      <FeedbackStats />

      <FeedbackList />
      
    </MainContainer>

  )

}

export default Home