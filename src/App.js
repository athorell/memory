import _ from 'lodash'
import React from 'react'

import './App.css'
import cat_vader from '../images/cat_vader.jpg'
import cat_hovercraft from '../images/cat_hovercraft.jpg'
import Content from './Content.js'
import Footer from './Footer.js'
import Header from './Header.js'

const App = React.createClass({
  getInitialState() {
    return {
      numberOfCards: 0,
      cards: {},
      images: [],
      flipped: [],
      loading: true,
    }
  },
  
  handleStartNewGame() {
    const numberOfCards = 4
    let images = [
      {
        id: 1,
        alt: 'cat_vader',
        src: cat_vader,
      },
      {
        id: 2,
        alt: 'cat_hovercraft',
        src: cat_hovercraft,
      }
    ]
    images = _.shuffle(_.concat([], images, images))
    let cards = {}
    for (let i = 0; i < numberOfCards; i++) {
      cards[i] = {
        id: i,
        image: images[i],
        isFlipped: false,
      }
    }
    this.setState({
      numberOfCards: numberOfCards,
      cards: cards,
      images: images,
      loading: false,
    })
  },
  
  flipCard(id) {
    let cards = _.cloneDeep(this.state.cards)
    cards[id].isFlipped = true
    let flipped = _.cloneDeep(this.state.flipped)
    
    // The card should only be added to flipped if a new card was clicked
    if (!_.isEqual(flipped[0], cards[id])) {
      flipped.push(cards[id])
    }

    this.setState({
      cards: cards,
      flipped: flipped,
    }, () => {
      if (flipped.length === 2) {
        this.handleCompareCards(flipped, cards)
      }
    })
  },
  
  handleCompareCards(flipped, cards) {
    const cardOne = flipped[0]
    const cardTwo = flipped[1]
    if (cardOne.image.id === cardTwo.image.id) {
      delete cards[cardOne.id]
      delete cards[cardTwo.id]
    } else {
      cards[cardOne.id].isFlipped = false
      cards[cardTwo.id].isFlipped = false
    }
    setTimeout(() => {
      this.setState({
        cards: cards,
        flipped: [],
      })
    }, 1000)
  },
  
  render() {
    return (
      <div>
        <Header/>
        <Content
          cards={this.state.cards}
          flipCard={this.flipCard}
          loading={this.state.loading}
        />
        <Footer
          handleStartNewGame={this.handleStartNewGame}
        />
      </div>
    );
  }
})

export default App
