import { useContext } from 'react'

import FeedbackContext from '../context/FeedbackContext'

import Button from './shared/Button'

import { FaTimes } from 'react-icons/fa'

import RatingSelect from './RatingSelect'

function FeedbackForm () {

  const { onSubmit, setRating, text, onInputChange, btnDisabled, alert } = useContext(FeedbackContext)
  
  return (

    <form onSubmit={onSubmit}>

      <h3>How would you rate our service?</h3>

      <RatingSelect select={(rating) => setRating(rating)} />

      <input type="text" id='text' value={text} placeholder='Write a review...' onChange={onInputChange} />

      {
        alert && <p className="xs">
                    <span className="bg">
                      <FaTimes />
                    </span>
                    {alert}
                  </p>
      }

      <Button type='submit' className='main' disabled={btnDisabled}>Send</Button>

    </form>

  )

}

export default FeedbackForm