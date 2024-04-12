import { useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

/**--------------------------------------------------------------------------- RatingSelect component function
 * 
 * @name RatingSelect
 * 
 * @function
 * 
 * @returns 10 radio buttons for selecting a rating value
 * 
 * @author livingtheOKlife
 * 
 * @date 12.04.2024
 * 
 * -------------------------------------------------- */

function RatingSelect () {

  // ------------------------- context

  const { selected, setSelected, onRatingChange, feedbackEdit } = useContext(FeedbackContext)
  
  // ------------------------- side effects

  useEffect(() => {
    
    if (feedbackEdit.edit === true) {
      
      setSelected(feedbackEdit.item.rating)
      
    }
    
  }, [feedbackEdit])

  // ------------------------- return

  return (

    <div className='rating-select'>

      <div className='selector'>
        <input type="radio" id="num1" name="rating" value='1' onChange={onRatingChange} checked={selected === 1} />
        <label>1</label>
      </div>

      <div className='selector'>
        <input type="radio" id="num2" name="rating" value='2' onChange={onRatingChange} checked={selected === 2} />
        <label>2</label>
      </div>

      <div className='selector'>
        <input type="radio" id="num3" name="rating" value='3' onChange={onRatingChange} checked={selected === 3} />
        <label>3</label>
      </div>

      <div className='selector'>
        <input type="radio" id="num4" name="rating" value='4' onChange={onRatingChange} checked={selected === 4} />
        <label>4</label>
      </div>

      <div className='selector'>
        <input type="radio" id="num5" name="rating" value='5' onChange={onRatingChange} checked={selected === 5} />
        <label>5</label>
      </div>

      <div className='selector'>
        <input type="radio" id="num6" name="rating" value='6' onChange={onRatingChange} checked={selected === 6} />
        <label>6</label>
      </div>

      <div className='selector'>
        <input type="radio" id="num7" name="rating" value='7' onChange={onRatingChange} checked={selected === 7} />
        <label>7</label>
      </div>

      <div className='selector'>
        <input type="radio" id="num8" name="rating" value='8' onChange={onRatingChange} checked={selected === 8} />
        <label>8</label>
      </div>

      <div className='selector'>
        <input type="radio" id="num9" name="rating" value='9' onChange={onRatingChange} checked={selected === 9} />
        <label>9</label>
      </div>

      <div className='selector'>
        <input type="radio" id="num10" name="rating" value='10' onChange={onRatingChange} checked={selected === 10} />
        <label>10</label>
      </div>

    </div>

  )
  
}

// --------------------------------------------------------------------------- RatingSelect component export

export default RatingSelect