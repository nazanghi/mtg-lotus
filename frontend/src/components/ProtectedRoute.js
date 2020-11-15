import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
//Need to integrate auth
export default ({ authenticated, children, component: Component, ...rest }) =>
    authenticated === true 
    ?   (
        <Route {...rest} component={Component}>
            {console.log(authneticated)}
        </Route>
    ) : (
        <Redirect to="/" />
    )