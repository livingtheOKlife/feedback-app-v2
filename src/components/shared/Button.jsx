import PropTypes from 'prop-types'

/**--------------------------------------------------------------------------- Button component function
 * 
 * @name Button
 * 
 * @function
 * 
 * @requires type PropTypes.string.isRequired
 * @requires className PropTypes.string.isRequired
 * @requires disabled PropTypes.bool
 * @requires children PropTypes.node.isRequired
 * 
 * @returns a reusable button component
 * 
 * @author livingtheOKlife
 * 
 * @date 12.04.2024
 * 
 * -------------------------------------------------- */

function Button ({ type, className, disabled, children }) {

  // ------------------------- return

  return (

    <button type={type} className={`btn btn-${className}`} disabled={disabled}>

      {children}

    </button>

  )
  
}

// --------------------------------------------------------------------------- PropTypes

Button.propTypes = {


  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired

}

// --------------------------------------------------------------------------- Button component export

export default Button