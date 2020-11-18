import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { __GetDecks } from '../services/DeckServices'
import CreateDeck from './CreateDeck'
import Card from '../components/Card'
const ViewAllDecks = (props) => {
    console.log(props)
    return <div>
        View All Decks
        <button onClick={()=> props.toggleCreateDeck(true)}>Create Deck</button>
        <div>
            {props.wantsCreateDeck ? 
                <CreateDeck 
                    addDeck={props.addDeck} 
                    toggleCreateDeck={props.toggleCreateDeck} 
                    currentUser={props.currentUser}
                /> 
                : null }
        </div>
        <div>
            {props.decks.map((deck) => <Card key={deck._id}>
<h4>{deck.name}</h4>
<p>{deck.description}</p>
<button onClick={()=>props.chooseDeck(deck)}>Manage</button>
<button>Delete /gotta make it/</button>
<button>Edit /gotta make it/</button>
<button>View Cards /gotta make it/</button>
            </Card>)}
        </div>
        </div>

}

export default ViewAllDecks