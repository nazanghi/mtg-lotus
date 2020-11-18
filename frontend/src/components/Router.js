import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
// import { SignInUser } from '../../../controllers/UserController' //gotta fix this
import Nav from './Nav'
import Home from '../pages/Home'
import LandingPage from '../pages/LandingPage'
import SignUp from '../pages/SignUp'
import Layout from '../components/Layout'
import ViewAllDecks from '../pages/ViewAllDecks'
import SignInUser from '../pages/SignIn'
import {__CheckSession, __GetProfile } from '../services/UserServices'
import { __GetDecks } from '../services/DeckServices'
import Profile from '../pages/Profile'
import CreateDeck from '../pages/CreateDeck'
import Discover from '../pages/Discover'


//should import ViewAllDecks either here or in profile
//I feel like here because I want to have it so you can view all your decks when you log in and create a deck
//I need to add more imports as it goes along and I have more things in this

class Router extends Component {
    constructor () {
        super ()
        this.state = {
            authenticated: false,
            currentUser: null,
            pageLoading: true,
            chosenDeck: null,
            decks: [],
            wantsCreateDeck: false,
            deckFetchError: false
        }
    }

    componentDidMount () {
        this.verifyTokenValid()
        this.setState({pageLoading: false})
    }
    
    verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const session = await __CheckSession() 
                console.log('session', session)
                this.setState(
                    {
                        currentUser: session.user,
                        authenticated: true
                    },
                    () => this.props.history.push('/') //this is the page it will go to
                )
                this.getDecks()
            } catch (error) {
                this.setState({ currentUser: null, authenticated: false })
                localStorage.clear()
            }
        }
    }



    toggleAuthenticated = (value, user, done) => {
        this.setState({ authenticated: value, currentUser: user }, () => done())
    }

    addDeck = (deck) => {
        this.setState(prevState => ({
            decks: [...prevState.decks, deck]
        }))
    }

    getDecks = () =>{
        this.setState(prevState=>({
            decks: [...prevState.decks]
        }))
    }

    chooseDeck = (deck) => {
        try {
            const selectedDeck = this.state.findById(deck)
            this.setState({chosenDeck: selectedDeck})
            console.log('choosedeck works',selectedDeck)
        } catch(error){throw error}
    }

    toggleCreateDeck = (value) => this.setState({wantsCreateDeck:value})



    render () {
        return (
            <div>
                <Nav authenticated={this.state.authenticated} currentUser ={this.state.currentUser}/>
            <main>

                {this.state.pageLoading ? (
                    <h4>Getting over Summoning Sickness...</h4>
                ) : (
                    <Switch>
                        <Route 
                            exact path = "/"
                            component = {() => (
                                <LandingPage>
                                    <Home/>
                                </LandingPage>
                            )}
                        />
                        <Route 
                            path = "/register"
                            component = {(props) => (
                                <LandingPage>
                                    <SignUp {...props}/>
                                </LandingPage>
                            )}
                        />
                        <Route 
                            path = "/decks"
                            component = {(props) => (

                                    <ViewAllDecks wantsCreateDeck={this.state.wantsCreateDeck} decks={this.state.decks}
                                    toggleCreateDeck={this.toggleCreateDeck}
                                    currentUser={this.state.currentUser}
                                    addDeck={this.addDeck}
                                    chooseDeck={this.chooseDeck}/>
                            )}
    
                        />                            
                        <Route
                            path = "/discover"
                            component= {(props) => (

                                <Discover
                                    {...props}
                                />
                            )} //this route's gotta get fixed up
                        />
                        <Route 
                            exact path = "/login"
                            component = {(props) => (
                                <LandingPage>
                                    <SignInUser 
                                        toggleAuthenticated={this.toggleAuthenticated}
                                        {...props}
                                    />
                                </LandingPage>
                            )}
                        />
                        <Route
                            path = "/deck/:deck_id"
                            component = {(props) => (
                                <LandingPage>
                                    <Profile
                                        {...props}
                                        decks={this.state.decks}
                                    />
                                </LandingPage>
                            )}
                        />
                     </Switch>
                    
                    )
                }
                </main>
            </div>
        )
    }
}

export default withRouter(Router)