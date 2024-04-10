import PropTypes from 'prop-types'

function Button ({ type, className, disabled, children }) {

  return (

    <button type={type} className={`btn btn-${className}`} disabled={disabled}>

      {children}

    </button>

  )
  
}

Button.propTypes = {


  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  diasbled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired

}

export default Button