import React from 'react'
import classNames from 'classnames'

import './Card.css'

const Card = React.createClass({
  displayName: 'Card',
  
  propTypes: {
    id: React.PropTypes.number,
    image: React.PropTypes.object,
    isFlipped: React.PropTypes.bool,
    flipCard: React.PropTypes.func,
  },
  
  render() {
    let image = null
    const classes = classNames('Card', {'Card-flip': this.props.isFlipped})
    if (this.props.isFlipped) {
      image = <img
        className="Card-image"
        src={this.props.image.src}
        alt={this.props.image.alt}
      />
    }
    return (
      <div
        className={classes}
        onClick={this.props.flipCard.bind(null, this.props.id)}>
        {image}
      </div>
    )
  }
})

export default Card
