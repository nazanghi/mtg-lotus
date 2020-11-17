import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { __GetDecks } from '../services/DeckServices'

export default class ViewAllDecks extends Component {
    constructor() {
        super()
        this.state = {
            decks: null
        }
    }

    componentDidMount() {
        this.getAllDecks()
    }

    getAllDecks = async () => {
        try {
            const decks = await __GetDecks()
            console.log(`checking decks plural `, decks)
            this.setState({decks: decks})

        } catch(error){throw error}
    }

    render() {
        //I need to map through it and fill it with all of the values of the user's decks
        const {decks} = this.state
        if (this.state.decks) {
            return (
                <section className = "card-wrapper flex-row">
                    <Card>
                        <div className="mask flex-col">
                            <div className ="card-content">
                                <h3></h3>
                            </div>
                        </div>
                    </Card>
                </section>
            )
        }
    }
}