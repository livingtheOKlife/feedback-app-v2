import { useState } from 'react'

function FeedbackItem () {

  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of a feedback item.')

  return (

    <li>
      <p className="xl">{rating}</p>
      <p className="me">{text}</p>
    </li>

  )

}

export default FeedbackItem