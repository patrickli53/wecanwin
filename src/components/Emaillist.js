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

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({[ e.target.email] : e.target.value })
    }

    async handleSubmit(e){
        e.preventDefault()

        const { email } = this.state
        const form = await axios.post('/api/form',{
            email
        })
    }
    render(){
        return(
            <div className='emaillist'>
                <ScrollAnimation animateIn='fadeInRight'>
                    <h1 className='f1 ttu pt3'>
                        <u>Join Our Email List!</u>
                    </h1>
    
                    {/* <p> Hi, Consider joining us for weekly updates on the envets going on!</p> */}
                    <div className='emailForm'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Input 
                                type='email' 
                                name='email' 
                                placeholder='Enter Email'
                                // onChange={this.handleChange}
                                />
                            </FormGroup>
                            
                            <Button>Submit</Button>
                        </Form>
                    </div>
                    
                </ScrollAnimation>
            </div>
        )
    }
    
}

export default Emaillist;