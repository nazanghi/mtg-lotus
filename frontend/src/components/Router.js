import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
// import { SignInUser } from '../../../controllers/UserController' //gotta fix this
import Home from '../pages/Home'
import LandingPage from '../pages/LandingPage'
import SignUp from '../pages/SignUp'
import Layout from '../components/Layout'
import Discover from '../pages/Discover'
import SignInUser from '../SignIn'

//I need to add more imports as it goes along and I have more things in this

class Router extends Component {
    constructor () {
        super ()
        this.state = {
            authenticated: false,
            currentUser: null,
            pageLoading: true
        }
    }

    componentDidMount () {
        // this.verifyTokenValid()
        this.setState({pageLoading: false})
    }

    // verifyTokenValid = async () => {
    //     const token = localStorage.getItem('token')
    //     if (token) {
    //         try {
    //             // const session = await __CheckSession() //I need to make __CheckSession in Services
    //             console.log('session', session)
    //             this.setState(
    //                 {
    //                     currentUser: session.user,
    //                     authenticated: true
    //                 },
    //                 () => this.props.history.push('/profile') //this is the page it will go to
    //             )
    //         } catch (error) {
    //             this.setState({ currentUser: null, authenticated: false })
    //             localStorage.clear()
    //         }
    //         //This sends an API request to verify the token
    //         // And if it's valid, the user 
    //     }
    // }

    // toggleAuthenticated = (value, user, done) => {
    //     this.setState({ authenticated: value, currentUser: user }, () => done())
    // }

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
                            path = "/Discover"
                            component = {(props) => (
                                <Layout
                                    currentUser={this.state.currentUser}
                                    authenticated={this.state.authenticated}
                                >
                                <Discover {...props} />
                                </Layout>
                            )}
                        />
                        <Route 
                            exact path = "/login"
                            component = {() => (
                                <LandingPage>
                                    <SignInUser 
                                        toggleAuthenticated={this.toggleAuthenticated}
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