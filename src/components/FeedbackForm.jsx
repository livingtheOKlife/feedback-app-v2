import { useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Button from './shared/Button'
import { FaTimes } from 'react-icons/fa'
import RatingSelect from './RatingSelect'

/**--------------------------------------------------------------------------- FeedbackForm component function
 * 
 * @name FeedbackForm
 * 
 * @function
 * 
 * @returns the form for leaving reviews
 * 
 * @author livingtheOKlife
 * 
 * @date 12.04.2024
 * 
 * -------------------------------------------------- */

function FeedbackForm () {

  // ------------------------- context

  const { onFormSubmit, setRating, text, setText, onInputChange, btnDisabled, alert, feedbackEdit, setBtnDisabled } = useContext(FeedbackContext)

  // ------------------------- side effects

  useEffect(() => {

    if (feedbackEdit.edit === true) {

      setBtnDisabled(false)
      setRating(feedbackEdit.item.rating)
      setText(feedbackEdit.item.text)

    }

  }, [feedbackEdit])

  // ------------------------- return
  
  return (

    <form onSubmit={onFormSubmit}>

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

// --------------------------------------------------------------------------- FeedbackForm component export

export default FeedbackForm