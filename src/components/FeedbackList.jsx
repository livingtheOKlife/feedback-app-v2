import PropTypes from 'prop-types'

import FeedbackItem from './FeedbackItem'

function FeedbackList ({ feedback }) {

  return (

    !feedback || feedback.length === 0 ?

      <p className="la">No feedback yet...</p>

    : <ul>

        {
          feedback.map((item) => (
            <FeedbackItem item={item} key={item.id} />
          ))
        }

      </ul>

  )

}

FeedbackList.propTypes = {

  feedback: PropTypes.array.isRequired

}

export default FeedbackList