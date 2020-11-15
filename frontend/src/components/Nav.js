import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css' //gotta make the nav in css
export default ({ currentUser, className }) => {
    return currentUser 
    ? (
        <header className={className}>
            <div className="icon">Welcome Back {currentUser.name}</div>
            <nav>
                <NavLink 
                    activeClassName="nav-active" to="/profile">
                        Profile
                </NavLink>
                <NavLink 
                    activeClassName="nav-active" to="/Discover">
                        Need to create a discover page
                </NavLink>
                <NavLink 
                    activeClassName="nav-active" to="/decks">
                        Your Decks
                </NavLink>
                <NavLink 
                    activeClassName="nav-active" 
                    to="/"
                    onClick={()=> localStorage.clear()}
                >
                        Sign Out
                </NavLink>
            </nav>
        </header>
    ) : (
        <header className={className}>
            <div className="icon"></div>
            <nav>
                <NavLink activeClassName="nav-active" to="/discover">
                    Discover
                </NavLink>
                <NavLink activeClassName="nav-active" to="/register">
                    Sign Up
                </NavLink>
                <NavLink activeClassName="nav-active" to="/login">
                    Sign In
                </NavLink>
            </nav>
        </header>
    )
}