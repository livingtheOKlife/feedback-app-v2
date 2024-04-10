import { useState } from 'react'

import Button from './shared/Button'

import { FaTimes } from 'react-icons/fa'

import RatingSelect from './RatingSelect'

function FeedbackForm () {

  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [alert, setAlert] = useState('')

  const onChange = (e) => {

    if (text === '') {

      setBtnDisabled(true)
      setAlert(null)

    } else if (text !== '' && text.trim().length <= 10) {

      setBtnDisabled(true)
      setAlert('Review must be 10 characters or more')

    } else {

      setBtnDisabled(false)
      setAlert(null)
      
    }

    setText(e.target.value)

  }

  const onClick = () => {}
  
  return (

    <form>

      <h3>How would you rate our service?</h3>

      <RatingSelect select={(rating) => setRating(rating)} />

      <input type="text" id='text' value={text} placeholder='Write a review...' onChange={onChange} />

      {
        alert && <p className="xs">
                    <div className="bg">
                      <FaTimes />
                    </div>
                    {alert}
                  </p>
      }

      <Button type='submit' className='main' disabled={btnDisabled} onClick={onClick}>Send</Button>

    </form>

  )

}

export default FeedbackForm