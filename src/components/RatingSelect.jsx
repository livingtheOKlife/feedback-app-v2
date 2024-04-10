import PropTypes from 'prop-types'

import { useState } from 'react'

function RatingSelect ({ select }) {

  const [selected, setSelected] = useState(10)

  const onChange = (e) => {

    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)

  }

  return (

    <div className='rating-select'>

      <input type="radio" id="num1" name="rating" value='1' onChange={onChange} checked={selected === 1} />
      <input type="radio" id="num2" name="rating" value='2' onChange={onChange} checked={selected === 2} />
      <input type="radio" id="num3" name="rating" value='3' onChange={onChange} checked={selected === 3} />
      <input type="radio" id="num4" name="rating" value='4' onChange={onChange} checked={selected === 4} />
      <input type="radio" id="num5" name="rating" value='5' onChange={onChange} checked={selected === 5} />
      <input type="radio" id="num6" name="rating" value='6' onChange={onChange} checked={selected === 6} />
      <input type="radio" id="num7" name="rating" value='7' onChange={onChange} checked={selected === 7} />
      <input type="radio" id="num8" name="rating" value='8' onChange={onChange} checked={selected === 8} />
      <input type="radio" id="num9" name="rating" value='9' onChange={onChange} checked={selected === 9} />
      <input type="radio" id="num10" name="rating" value='10' onChange={onChange} checked={selected === 10} />

    </div>

  )
  
}

export default RatingSelect