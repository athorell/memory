import _ from 'lodash'
import React from 'react'

import Card from './Card.js'
import highfive from '../images/highfive.gif'
import './Content.css'

const Content = React.createClass({
  displayName: 'Content',
  
  propTypes: {
    cards: React.PropTypes.object,
    flipCard: React.PropTypes.func,
    loading: React.PropTypes.bool,
  },
  
  renderCards() {
    const cards = _.map(this.props.cards, (card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          image={card.image}
          isFlipped={card.isFlipped}
          flipCard={this.props.flipCard}
        />
      )
    })
    return cards
  },
  
  render() {
    const winning = _.isEmpty(this.props.cards) && !this.props.loading
    return (
      <div className="Content">
        <div className="Content-items">
          <div className={winning ? "Content-winning__show" : "Content-winning__hide"}>
            <img src={highfive} alt="highfive" />
            <div className="Content-winning__text">WINNING!</div>
          </div>
          {this.renderCards()}
        </div>
      </div>
    );
  },
})

export default Content
