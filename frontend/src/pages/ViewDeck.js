import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { __GetSingleDeck } from '../services/DeckServices'
import '../styles/DeckView.css' //gotta make this
export default class ViewDeck extends Component {
    constructor() {
        super ()
        this.state={
            post: null
        }
    }

    componentDidMount() {
        this.getDeck()
    }

    getDeck = async() => {
        try {
            const deck = await __GetSingleDeck(this.props.match.params.deck_id)
        } catch (error) {throw error, console.log(error)}
    }

    render() {
        const { deck } = this.state
        if (this.state.deck) {
            return (
                <div className="decks detail">
                    <div className="content-wrapper flex-row">
                        <div className="left-content col-1">
                            <div className="image-wrapper">
                                {/* <img src={deck.featured_art} alt ={`${deckName}`} /> */}
                                <p>this is a placeholder, you will have an image here</p>
                            </div>
                        </div>
                        <div className="right-content col-2 flex-col">
                            <div className="content-top">
                                <h2>{deck.title}</h2>
                                <p>{deck.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            

            )
        }
    }
}