import { useState } from 'react'

import feedbackData from './data/feedbackData'

import HeaderContainer from './components/layout/HeaderContainer'
import FooterContainer from './components/layout/FooterContainer'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'

function App () {

  const [feedback, setFeedback] = useState(feedbackData)

  const deleteFeedback = (id) => {

    if (window.confirm('Are you sure you want to delete your feedback?')) {
      
      setFeedback(feedback.filter((item) => item.id !== id))

    }

  }

  return (

    <div className="App">

      <h1>livingtheOKlife</h1>
      
      <HeaderContainer />

      <main id="main-container">

        <FeedbackForm />

        <FeedbackStats feedback={feedback} />

        <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />

      </main>

      <FooterContainer />

    </div>

  )
  
}

export default App