import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import {__CreateDeck} from '../services/DeckServices'

export default class CreateDeck extends Component {
    constructor () {
        super()
        this.state = {
            name: '',
            description: ''
        }
    }

    handleChange = ({target}) => {
        this.setState({ [target.name]: target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const deck = await __CreateDeck(this.state, this.props.currentUser._id)
            this.props.addDeck(deck)
            this.props.toggleCreateDeck(false)
        } catch(error){throw error}
    }

    render() {
        const {name, description, cards } = this.state
        return (
            <div className = "upload content">
                <form className="flex-col" onSubmit={this.handleSubmit}>
                    <TextInput 
                        placeholder="Name Your Deck"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <TextInput
                        placeholder="What does it do?"
                        name="description"
                        value={description}
                        onChange={this.handleChange}
                    />
                <button>Create A Deck!</button>
                </form>
            </div>
        )
    }


}