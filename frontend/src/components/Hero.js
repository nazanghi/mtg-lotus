import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div className ="hero flex-col">
            <div className="hero-message">
                <h1>Build Your Perfect Deck</h1>
                <p>Lorem test stuff blah blah blah we're gonna see if this works   </p>
            </div>
            <div className="hero-action">
                <Link to="/register">Get Started</Link>
            </div>
        </div>
    )
}