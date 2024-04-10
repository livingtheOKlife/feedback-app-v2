import { useState } from 'react'

function FeedbackForm () {

  const [text, setText] = useState('')

  const onChange = (e) => setText(e.target.value)
  
  return (

    <form>

      <h3>How would you rate our service?</h3>

      {/* @todo - ratings select */}

      <input type="text" id='text' value={text} placeholder='Write a review...' onChange={onChange} />

      <button type='submit' className="btn btn-main">Send</button>

    </form>

  )

}

export default FeedbackForm