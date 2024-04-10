import PropTypes from 'prop-types'

function Button ({ type, className, disabled, onClick, children }) {

  return (

    <button type={type} className={`btn btn-${className}`} onClick={onClick} disabled={disabled}>

      {children}

    </button>

  )
  
}

Button.propTypes = {


  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  diasbled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired

}

export default Button