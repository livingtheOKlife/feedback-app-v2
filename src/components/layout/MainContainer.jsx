import PropTypes from 'prop-types'

function MainContainer ({ className, children }) {
  
  return (

    <main id="main-container" className={className}>

      {children}

    </main>

  )

}

MainContainer.propTypes = {

  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired

}

export default MainContainer