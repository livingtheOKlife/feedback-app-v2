import { useContext, useState } from 'react'

import FeedbackContext from '../context/FeedbackContext'

function RatingSelect () {

  const { selected, onRatingChange } = useContext(FeedbackContext)

  return (

    <div className='rating-select'>

      <label>
        <p className='me'>1</p>
        <input type="radio" id="num1" name="rating" value='1' onChange={onRatingChange} checked={selected === 1} />
      </label>

      <label>
        <p className='me'>2</p>
        <input type="radio" id="num2" name="rating" value='2' onChange={onRatingChange} checked={selected === 2} />
      </label>

      <label>
        <p className='me'>3</p>
        <input type="radio" id="num3" name="rating" value='3' onChange={onRatingChange} checked={selected === 3} />
      </label>

      <label>
        <p className='me'>4</p>
        <input type="radio" id="num4" name="rating" value='4' onChange={onRatingChange} checked={selected === 4} />
      </label>

      <label>
        <p className='me'>5</p>
        <input type="radio" id="num5" name="rating" value='5' onChange={onRatingChange} checked={selected === 5} />
      </label>

      <label>
        <p className='me'>6</p>
        <input type="radio" id="num6" name="rating" value='6' onChange={onRatingChange} checked={selected === 6} />
      </label>

      <label>
        <p className='me'>7</p>
        <input type="radio" id="num7" name="rating" value='7' onChange={onRatingChange} checked={selected === 7} />
      </label>

      <label>
        <p className='me'>8</p>
        <input type="radio" id="num8" name="rating" value='8' onChange={onRatingChange} checked={selected === 8} />
      </label>

      <label>
        <p className='me'>9</p>
        <input type="radio" id="num9" name="rating" value='9' onChange={onRatingChange} checked={selected === 9} />
      </label>

      <label>
        <p className='me'>10</p>
        <input type="radio" id="num10" name="rating" value='10' onChange={onRatingChange} checked={selected === 10} />
      </label>

    </div>

  )
  
}

export default RatingSelect