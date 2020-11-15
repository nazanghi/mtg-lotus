import React from 'react'
import Hero from '../components/Hero' //gotta make a Hero
import '../styles/Landing.css' //gotta make Landing style
import Nav from '../components/Nav' //gotta make a Nav component

export default ({ children }) => {
    return( //gotta add a bunch of divs and match em up with CSS
        <div className = "landing-page flex-row">
            <section className="left flex-sm flex-col">
                <div className ="mask flex-col">
                    <div className="content-wrapper flex-row">
                        <h3 className="logo">Logo</h3>
                        <div className="hero-wrapper flex-row">
                        <div className ="cl-left flex-col">
                            <Hero />        
                        </div>
                        <div className="cl-right flex-col">
                            <div className="path-wrapper">
                                <img src={} alt =""/>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="image-wrapper">
                <img src={} alt=""/>
            </div>
            </section>
            <section className = "right flex-sm">
                <Nav/>
                {children}
            </section>
        </div>
    )
}