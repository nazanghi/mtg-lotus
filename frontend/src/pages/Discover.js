import React, { Component } from 'react'
import Card from '../components/Card'
import { __GetCards } from '../services/CardServices'
import '../styles/Discover.css'


export default class Discover extends Component {
    constructor () {
        super()
        this.state = {
        cards: [],
        currentPage: 1
    }
}

    componentDidMount() {
        this.getAllCards()
    }

    getAllCards = async () => {
        try {
            const cards = await __GetCards(this.state.currentPage)
            this.setState({cards: [...this.state.cards, ...cards]})
        } catch (error) {throw error}
    }

    incrementPage = () =>
        this.setState(
            (prevstate) => ({ currentPage: prevstate.currentPage ++ }),
            () => this.getAllCards()
        )

    render() {
        const { cards } = this.state
        return (
            <div className="discover wrapper">
                <h2>View All Cards</h2>
                <section className="content-wrapper">
                    {cards.length 
                    ? (
                        <h3>No matching cards found!</h3>
                        ) : (
                            cards.map((card)=> (
                                <Card
                                    key={card._id}
                                    //I want the onClick to pop the card up, and then
                                        //provide option to add to a deck
                                    //for now this just adds it with the onclick
                                    // onClick={()=> this.props.history.push(`/${decks._id}/${card._id}`)}
                                >
                                    <div className="mask flex-col discover">
                                        <div className="flex-col">
                                            <div className="card-content">
                                                <h3>{card.title}</h3>
                                                <p>{card.rules_text}</p>
                                            </div> 
                                        </div>
                                    </div>
                                    {/* <img src={card._art} alt="" /> */}
                                    <p> placeholder for an image </p>
                                </Card>
                            ))
                        //this is really more for when filter functionality is incorporated
                    )}
                    <button onClick = {this.incrementPage}>Get More Cards</button>
                </section>
            </div>
        )
    }
}

// make an import for a function from services
//need to flesh out the services before this will become really thorough here 




//Do I want to display random cards on the discover page
//Or do I want to display completed decks that people have made?