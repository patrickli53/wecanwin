import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

class Emaillist extends Component{
    constructor(){
        super()
        this.state = {
            email: ''
        }

        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handleChange = e => {
    //     this.setState({[ e.target.email] : e.target.value })
    // }

    // async handleSubmit(e){
    //     e.preventDefault()

    //     const { email } = this.state
    //     const form = await axios.post('/api/form',{
    //         email
    //     })
    // }

    render(){
        return(
            <div className='emaillist'>
                <ScrollAnimation animateIn='fadeInRight'>
                    <h1 className='f1 ttu pt3'>
                        <u>Join Our Email List!</u>
                    </h1>
    
                    {/* <p> Hi, Consider joining us for weekly updates on our events!</p> */}
                    <div className='emailForm'>
                        <form method="POST" action="https://formspree.io/info@wecanwin.ca" onSubmit={this.handleSubmit}>
                            
                                <input 
                                type='email' 
                                name='email' 
                                placeholder='Enter Email'
                                // onChange={this.handleChange}
                                />
                                <input type="submit" value="Send"/>
                        </form>
                    </div>
                    
                </ScrollAnimation>
            </div>
        )
    }
    
}

export default Emaillist;