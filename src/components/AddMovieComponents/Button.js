import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { buttonClick } = this.props;
    return (
      <button
        type="submit"
        onClick={ buttonClick }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = ({
  onClick: PropTypes.func,
}).isRequired;

export default Button;
