import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

/**--------------------------------------------------------------------------- FeedbackStats component function
 * 
 * @name FeedbackStats
 * 
 * @function
 * 
 * @returns two h4 elements containing the average rating and total number of the reviews
 * 
 * @author livingtheOKlife
 * 
 * @date 12.04.2024
 * 
 * -------------------------------------------------- */

function FeedbackStats () {

  // ------------------------- context

  const { feedback } = useContext(FeedbackContext)

  // ------------------------- calc average

  let average = feedback.reduce((acc, cur) => {

    return (acc + cur.rating) 

  }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  // ------------------------- return

  return (

    <section>

      <h4>{feedback.length} Reviews</h4>

      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>

    </section>

  )

}

// --------------------------------------------------------------------------- FeedbackStats component export

export default FeedbackStats