import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'

/**--------------------------------------------------------------------------- FeedbackList component function
 * 
 * @name FeedbackList
 * 
 * @function
 * 
 * @returns if the feedback array is empty, a paragraph to say there is no current feedback
 * @returns if the feedback array isn't empty, a list of feedback items
 * 
 * @author livingtheOKlife
 * 
 * @date 12.04.2024
 * 
 * -------------------------------------------------- */

function FeedbackList () {

  // ------------------------- context

  const { feedback, deleteFeedback } = useContext(FeedbackContext)

  // ------------------------- return

  return (

    !feedback || feedback.length === 0 ?

      <p>No feedback yet...</p>

    : <ul>

        {
          feedback.map((item) => (
            <FeedbackItem item={item} deleteFeedback={deleteFeedback} key={item.id} />
          ))
        }

      </ul>

  )

}

// --------------------------------------------------------------------------- FeedbackList component export

export default FeedbackList