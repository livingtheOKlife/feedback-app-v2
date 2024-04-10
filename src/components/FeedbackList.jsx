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

  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  )

}

export default FeedbackList