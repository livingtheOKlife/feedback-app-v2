import PropTypes from 'prop-types'

import { createContext, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export function FeedbackProvider ({ children }) {

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