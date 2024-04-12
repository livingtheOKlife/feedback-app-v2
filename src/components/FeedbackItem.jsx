import PropTypes from 'prop-types'

import { useContext } from 'react'

import FeedbackContext from '../context/FeedbackContext'

import { FaTimes } from 'react-icons/fa'

function FeedbackItem ({ item }) {

  const { deleteFeedback } = useContext(FeedbackContext)

  return (

    <li>
      
      <p className="xl">{item.rating}</p>
      
      <p className="me">{item.text}</p>
      
      <button onClick={() => deleteFeedback(item.id)}>
        <FaTimes />
      </button>
      
    </li>

  )

}

FeedbackItem.propTypes = {

  item: PropTypes.object.isRequired

}

export default FeedbackItem