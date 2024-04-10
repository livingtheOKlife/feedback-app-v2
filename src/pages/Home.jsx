import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import feedbackData from '../data/feedbackData'

import FeedbackForm from '../components/FeedbackForm'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackList from '../components/FeedbackList'
import MainContainer from '../components/layout/MainContainer'

function Home () {

  const [feedback, setFeedback] = useState(feedbackData)

  const deleteFeedback = (id) => {

    if (window.confirm('Are you sure you want to delete your feedback?')) {
      
      setFeedback(feedback.filter((item) => item.id !== id))

    }

  }

  const addFeedback = (newFeedback) => {

    newFeedback.id = uuidv4()
    setFeedback([
      newFeedback,
      ...feedback
    ])

  }

  return (
    
    <MainContainer className='home'>

      <FeedbackForm addFeedback={addFeedback} />

      <FeedbackStats feedback={feedback} />

      <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
      
    </MainContainer>

  )

}

export default Home