import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {__GetCards} from '../services/CardServices'
import '../styles/ViewCards.css'

export default class ViewCards extends Component {
    constructor () {
        super()
        this.state = {
            cards: null
        }
    }

    componentDidMount(){
        this.getCards()
    }

    getCards = async () => {
        try {
            const cards = await __GetCards()
            this.setState({cards})
        } catch (error) {throw error}
    }


    //the big thing I need to do here is set up how the cards are going to be arranged
    //which is going to be in a bunch of divs (and spans? maybe?)
    //but then I gotta coordinate it with the css
    render() {
        const {cards} = this.state
        if (this.state.cards) {
            return (
                <div className = "mtgcards detail">
                    <div className = "content-wrapper flex-row">
                        <div className = "left-content col-1">
                            <div className = "image-wrapper">
                                {/* <img src = {} alt ="" /> */}
                                <p>placeholder for an image</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}