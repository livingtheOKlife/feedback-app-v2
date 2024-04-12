import PropTypes from 'prop-types'
import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

/**--------------------------------------------------------------------------- FeedbackProvider provider function
 * 
 * @name FeedbackProvider
 * 
 * @function
 * 
 * @requires children PropTypes.node.isRequired
 * 
 * @returns context provider for feedback
 * 
 * @author livingtheOKlife
 * 
 * @date 12.04.2024
 * 
 * -------------------------------------------------- */

export function FeedbackProvider ({ children }) {

  // ------------------------- state
  
  const [rating, setRating] = useState(10)
  const [selected, setSelected] = useState(10)
  const [text, setText] = useState('')
  const [alert, setAlert] = useState(null)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [feedback, setFeedback] = useState([

    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos maiores officiis soluta nulla quasi similique facere itaque, perferendis odit vero.',
    },

    {
      id: 2,
      rating: 9,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam, dolor animi hic fugit itaque?',
    },

    {
      id: 3,
      rating: 8,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ad fuga recusandae labore aut explicabo cumque animi!',
    },

  ])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  /**-------------------------------------------------- onInputChange function
   * 
   * @name onInputChange
   * 
   * @function
   * 
   * @description if review length is 0, disable the button and don't show the alert.
   * @description if review length is not 0 and is less than (or equal to 10), disable the button and show the alert
   * @description otherwise, enable the button and dont show the alert
   * @description sets 'text' to e.target.value
   * 
   * @author livingtheOKlife
   * 
   * @date 12.04.2024
   * 
   * ------------------------- */

  const onInputChange = (e) => {

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

  /**-------------------------------------------------- onRatingChange function
   * 
   * @name onRatingChange
   * 
   * @function
   * 
   * @description sets the selected rating to the one you select
   * @description sets 'rating' to the value of the rating you selected
   * 
   * @author livingtheOKlife
   * 
   * @date 12.04.2024
   * 
   * ------------------------- */

  const onRatingChange = (e) => {

    setSelected(+e.currentTarget.value)
    setRating(+e.currentTarget.value)

  }

  /**-------------------------------------------------- onFormSubmit function
   * 
   * @name onFormSubmit
   * 
   * @function
   * 
   * @description handles form submisson
   * 
   * @author livingtheOKlife
   * 
   * @date 12.04.2024
   * 
   * ------------------------- */

  const onFormSubmit = (e) => {

    e.preventDefault()

    if (text.trim().length > 10) {

      const newFeedback = {
        text,
        rating
      }

      addFeedback(newFeedback)
      setText('')

    }

  }

  /**-------------------------------------------------- deleteFeedback function
   * 
   * @name deleteFeedback
   * 
   * @function
   * 
   * @description filters out the item from the array of feedbacks, that you chose to remove
   * 
   * @author livingtheOKlife
   * 
   * @date 12.04.2024
   * 
   * ------------------------- */

  const deleteFeedback = (id) => {

    if (window.confirm('Are you sure you want to delete your feedback?')) {
      
      setFeedback(feedback.filter((item) => item.id !== id))

    }

  }

  /**-------------------------------------------------- addFeedback function
   * 
   * @name addFeedback
   * 
   * @function
   * 
   * @description applies unique id to the feedback item
   * @description adds the new feedback item to the array and spreads over the rest of the array
   * 
   * @author livingtheOKlife
   * 
   * @date 12.04.2024
   * 
   * ------------------------- */

  const addFeedback = (newFeedback) => {

    newFeedback.id = uuidv4()
    setFeedback([
      newFeedback,
      ...feedback
    ])

  }

  /**--------------------------------------------------------------------------- editFeedback */

  const editFeedback = (item) => {

    setFeedbackEdit({
      item: item,
      edit: true
    })

  }

  // ------------------------- return

  return (

    <FeedbackContext.Provider value={{
      text,
      setText,
      rating,
      setRating,
      btnDisabled,
      setBtnDisabled,
      alert,
      selected,
      setSelected,
      onRatingChange,
      onInputChange,
      onFormSubmit,
      feedback,
      setFeedback,
      addFeedback,
      deleteFeedback,
      editFeedback,
      feedbackEdit,
      setFeedbackEdit
    }}>

      {children}

    </FeedbackContext.Provider>

  )

}

// --------------------------------------------------------------------------- PropTypes

FeedbackProvider.propTypes = {

  children: PropTypes.node.isRequired

}

// --------------------------------------------------------------------------- FeedbackContext context export

export default FeedbackContext