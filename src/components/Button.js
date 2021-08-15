import PropTypes from 'prop-types'

const Button = ({ color, text }) => {

    return <button style={{ backgroundColor: color }} className="global-btn">
     {text}
    </button>
}

Button.defaultProps = {
    // color: '#1B1D23'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    // onClick: PropTypes.func,
}
export default Button;