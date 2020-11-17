import React, { Component } from 'react'
import { __GetProfile } from '../services/UserServices'
import { __DeleteDeck } from '../services/DeckServices'
import Card from '../components/Card'


export default class Profile extends Component {
    constructor (props) {
        super()
    }

 
    render(){
        console.log(`checking props`, this.props)
        return(
            // I need to map through a user's decks to return them all to there
            //and set it as a ternary
            //so if they don't have any decks it tells them, and then prompts them to create one
            
            <section className="card-wrapper flex-row">
            {this.props.decks.map((deck)=> console.log('checking deck',deck))}

                {/* <Card>
                    <div className ="mask flex-col">
                        <div className= "card-content">
                            <h3>{this.}</h3>
                            <p>{this.chosenDeck.description}</p>
                        </div>
                    </div>
                </Card> */}
            </section> 
        )
    }
}