import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { FaTimes } from 'react-icons/fa'

/**--------------------------------------------------------------------------- FeedbackItem component function
 * 
 * @name FeedbackItem
 * 
 * @function
 * 
 * @requires item PropTypes.object.isRequired
 * 
 * @returns a <li> with the reviews contents
 * 
 * @author livingtheOKlife
 * 
 * @date 12.04.2024
 * 
 * -------------------------------------------------- */

function FeedbackItem ({ item }) {

  // ------------------------- context

  const { deleteFeedback } = useContext(FeedbackContext)

  // ------------------------- return

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

// --------------------------------------------------------------------------- PropTypes

FeedbackItem.propTypes = {

  item: PropTypes.object.isRequired

}


// --------------------------------------------------------------------------- FeedbackItem component export

export default FeedbackItem