import { useContext } from 'react'

import FeedbackContext from '../context/FeedbackContext'

import FeedbackItem from './FeedbackItem'

function FeedbackList () {

  const { feedback, deleteFeedback } = useContext(FeedbackContext)

  return (

    !feedback || feedback.length === 0 ?

      <p className="la">No feedback yet...</p>

    : <ul>

        {
          feedback.map((item) => (
            <FeedbackItem item={item} deleteFeedback={deleteFeedback} key={item.id} />
          ))
        }

      </ul>

  )

}

export default FeedbackList