import { useState } from 'react'

import feedbackData from './data/feedbackData'

import HeaderContainer from './components/layout/HeaderContainer'
import FooterContainer from './components/layout/FooterContainer'
import FeedbackList from './components/FeedbackList'

function App () {

  const [feedback, setFeedback] = useState(feedbackData)

  return (

    <div className="App">

      <h1>livingtheOKlife</h1>
      
      <HeaderContainer />

      <main id="main-container">

        <FeedbackList feedback={feedback} />

      </main>

      <FooterContainer />

    </div>

  )
  
}

export default App