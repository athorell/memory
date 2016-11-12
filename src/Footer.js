import React from 'react'

import Button from './Button.js'
import './Footer.css'

const Footer = React.createClass({
  displayName: 'Footer',
  
  propTypes: {
    handleStartNewGame: React.PropTypes.func,
  },
  
  render() {
    return (
      <div className="Footer">
        <Button handleStartNewGame={this.props.handleStartNewGame} />
      </div>
    );
  }
})

export default Footer
