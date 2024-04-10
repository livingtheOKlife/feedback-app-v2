import PropTypes from 'prop-types'

import { useState } from 'react'

function FeedbackItem ({ item }) {

  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of a feedback item.')

  return (

    <li>
      <p className="xl">{item.rating}</p>
      <p className="me">{item.text}</p>
    </li>

  )

}

FeedbackItem.propTypes = {

  item: PropTypes.object.isRequired

}

export default FeedbackItem