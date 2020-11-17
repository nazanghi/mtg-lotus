import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
// import { SignInUser } from '../../../controllers/UserController' //gotta fix this
import Home from '../pages/Home'
import LandingPage from '../pages/LandingPage'
import SignUp from '../pages/SignUp'
import Layout from '../components/Layout'
import Discover from '../pages/Discover'
import SignInUser from '../pages/SignIn'
import {__CheckSession } from '../services/UserServices'
import { __GetDecks } from '../services/DeckServices'
import Profile from '../pages/Profile'

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
            chosenDeck: null
        }
    }

    componentDidMount () {
        this.verifyTokenValid()
        this.setState({pageLoading: false})
        this.chooseDeck()
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
            } catch (error) {
                this.setState({ currentUser: null, authenticated: false })
                localStorage.clear()
            }
        }
    }

    chooseDeck = async () => {
        try {
            const chosenDeck = 
                await __GetDecks()
                console.log(`chooseDeck fires`)
                this.setState(
                    {
                        chosenDeck: chosenDeck.deck
                    },
                    () => this.props.history.push('/')
                )
        } catch(error){throw error}
    }

    toggleAuthenticated = (value, user, done) => {
        this.setState({ authenticated: value, currentUser: user }, () => done())
    }

    render () {
        return (
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
                            path = "/discover"
                            component = {(props) => (
                                <Layout
                                    currentUser={this.state.currentUser}
                                    authenticated={this.state.authenticated}
                                    chosenDeck={this.state.chosenDeck}
                                >
                                <Discover {...props} />
                                </Layout>
                            )}
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
                            path = "/profile"
                            component = {(props) => (
                                <LandingPage>
                                    <Profile
                                        {...props}
                                    />
                                </LandingPage>
                            )}
                        />
                     </Switch>
                    
                    )
                }
            </main>
        )
    }
}

export default withRouter(Router)