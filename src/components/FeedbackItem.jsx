import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { FaTimes, FaEdit } from 'react-icons/fa'

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

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  // ------------------------- return

  return (

    <li>
      
      <p className="xl">{item.rating}</p>
      
      <p className="me">{item.text}</p>

      <div className="ctrl-panel">
        
        <button onClick={() => deleteFeedback(item.id)}>
          <FaTimes />
        </button>
        
        <button onClick={() => editFeedback(item)}>
          <FaEdit />
        </button>

      </div>
      
    </li>

  )

}

// --------------------------------------------------------------------------- PropTypes

FeedbackItem.propTypes = {

  item: PropTypes.object.isRequired

}


// --------------------------------------------------------------------------- FeedbackItem component export

export default FeedbackItem