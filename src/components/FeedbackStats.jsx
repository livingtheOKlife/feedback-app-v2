import { useContext } from 'react'

import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats () {

  const { feedback } = useContext(FeedbackContext)

  let average = feedback.reduce((acc, cur) => {

    return (acc + cur.rating) 

  }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (

    <section>

      <h4>{feedback.length} Reviews</h4>

      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>

    </section>

  )

}

export default FeedbackStats