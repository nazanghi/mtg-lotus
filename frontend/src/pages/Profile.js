import React, { Component } from 'react'
import { __GetProfile } from '../services/UserServices'
import { __DeleteDeck } from '../services/DeckServices'
import Card from '../components/Card'


export default class Profile extends Component {
    constructor () {
        super()
        this.state = {
            deckFetchError: false,
            decks: [],
            chosenDeck: null
        }
    }

    componentDidMount() {
        this.getDecks()
    }

    getDecks = async () => {
        try {
            console.log(this.props)
            const profileData = await __GetProfile(this.props.currentUser._id)
            this.setState({ decks: profileData.decks })
        } catch(error) {console.log(error)}
    }
    
    deleteDeck = async (id) => {
        try{
            const decksToKeep = this.state.decks.filter((deck) => deck._id !==id)
            this.setState({ decks: decksToKeep})
            await __DeleteDeck(id)
        } catch (error) {console.log(error)}
    }

    selectDeck = async() => {
        try {
            const selectedDeck= this.state.decks.findById() //need to tweak
            this.setState({chosenDeck: selectedDeck})
        } catch(error){throw error}
    }


    render(){
        return(
            
            <section className="card-wrapper flex-row">
            <p> this indicates that it works</p>
                <Card>
                    <div className ="mask flex-col">
                        <div className= "card-content">
                            <h3>{this.chosenDeck.name}</h3>
                            <p>{this.chosenDeck.description}</p>
                        </div>
                    </div>
                </Card>
            </section> 
        )
    }
}