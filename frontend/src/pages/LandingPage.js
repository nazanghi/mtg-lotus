import React from 'react'
import Hero from '../components/Hero' //gotta make a Hero
import '../styles/Landing.css' //gotta make Landing style
import Nav from '../components/Nav' //gotta make a Nav component

export default ({ children }) => {
    return( //gotta add a bunch of divs and match em up with CSS
        <div>
            <Hero />
        </div>
    )
}