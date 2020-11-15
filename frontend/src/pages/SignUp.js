import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import {__RegisterUser} from '../services/UserServices'
import '../styles/Signup.css'

export default class Signup extends Component {
    // TODO integrate Auth... gotta review Monday's class again
    constructor () {
        super ()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value})
        console.log(this.state)
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await __RegisterUser(this.state)
            this.props.history.push('/login')
        } catch (error) {throw error, console.log(error)}
    }

    render() {
        const { name, password, email } = this.state
        return (
            <div className = "signup flex-col">
                <form 
                    className="flex-col"
                    onSubmit={this.handleSubmit}>
                        <TextInput
                            placeholder="Your Email"
                            name="email"
                            value={email}
                            type="email"
                            onChange={this.handleChange}
                        />
                        <TextInput
                            placeholder="Your Name"
                            name="name"
                            value={name}
                            type="text"
                            onChange={this.handleChange}
                        />
                        <TextInput
                            placeholder="Your Password"
                            name="password"
                            value={password}
                            type="password"
                            onChange={this.handleChange}
                        />
                        <button>Sign Up</button>
                    </form>
            </div>
        )
    }
}