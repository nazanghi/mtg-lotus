import React, { Component } from 'react'
import { __GetSingleDeck, __UpdateDeckInfo } from '../services/DeckServices'
import '../styles/ViewDeck.css' //gotta make this

//this file also allows you to edit/update your deck and will allow a user to delete it

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

    handleChange = ({target}) => {
        this.setState({ [target.name]: target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await __UpdateDeckInfo(this.state, this.props.match.params.deck_id)
            this.props.history.push('/deck')
        } catch(error){throw error}
    }

    render() {
        const { deck } = this.state
        if (this.state.deck) {
            return (
                <div className="decks detail">
                    <div className="content-wrapper flex-row">
                        <div className="left-content col-1">
                            <div className="image-wrapper">
                                {/* <img src={not sure what to have as an image} alt ={`${deckName}`} /> */}
                                <p>this is a placeholder, you will have an image here</p>
                            </div>
                        </div>
                        {/* I should map through the selected deck and return the cards in it as an unordered list */}
                        <div className="right-content col-2 flex-col">
                            <div className="content-top">
                                <h2>{deck.name}</h2>
                                <p>{deck.description}</p>
                                <ul>
                                    {deck.cards}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            

            )
        }
    }
}

//similar to using .map to add the button to the cards, I can do it here to remove the cards