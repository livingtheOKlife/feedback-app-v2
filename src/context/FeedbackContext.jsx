import PropTypes from 'prop-types'

import { createContext, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export function FeedbackProvider ({ children }) {
  
  const [rating, setRating] = useState(10)

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [alert, setAlert] = useState(null)
  const [selected, setSelected] = useState(10)

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

  const onRatingChange = (e) => {

    setSelected(+e.currentTarget.value)
    setRating(+e.currentTarget.value)

  }

  const onSubmit = (e) => {

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

  const deleteFeedback = (id) => {

    if (window.confirm('Are you sure you want to delete your feedback?')) {
      
      setFeedback(feedback.filter((item) => item.id !== id))

    }

  }

  const addFeedback = (newFeedback) => {

    newFeedback.id = uuidv4()
    setFeedback([
      newFeedback,
      ...feedback
    ])

  }

  return (

    <FeedbackContext.Provider value={{
      rating,
      setRating,
      btnDisabled,
      alert,
      selected,
      setSelected,
      onRatingChange,
      onInputChange,
      onSubmit,
      feedback,
      setFeedback,
      addFeedback,
      deleteFeedback
    }}>

      {children}

    </FeedbackContext.Provider>

  )

}

FeedbackProvider.propTypes = {

  children: PropTypes.node.isRequired

}

export default FeedbackContext