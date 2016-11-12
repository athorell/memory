import React from 'react'

import './Button.css'

const Button = React.createClass({
  displayName: 'Button',
  
  propTypes: {
    handleStartNewGame: React.PropTypes.func,
  },
  
  render() {
    return (
      <div className="Button" onClick={this.props.handleStartNewGame}>
        Start new game!
      </div>
    );
  }
})

export default Button