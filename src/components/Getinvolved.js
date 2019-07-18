import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button } from 'reactstrap';

const Getinvolved = () => {
    return(
        <div className='getinvolved'>
        <ScrollAnimation animateIn='fadeInRight'>
            <h1 className=' f1 ttu '>
                <u>Get Involved!</u>
            </h1>

            <h2> Join </h2>
            <p> Become a member of We Can Win! As a member, you will receive news about what is happening and be engaged in the community. </p>
            <p>If you would like to join, fill out the information below!</p>

            <Button href='/' outline color="primary" size='sm'>Join</Button>{' '}

            <h2> Volunteer </h2>
            <p> Thank you for your interest in volunteering with We Can Win. We appreciate and thank all volunteers who bring their perceptions and experiences to help our organization provide exceptional services. 
                We have a wide range of volunteer opportunities available to match your skills and interest. Volunteer positions are based on availability and are placed according to the interests, skills and agency needs.
            </p>

            <p>
                Benefits of volunteering with We Can Win include:
                <ul>
                    <li> Opportunity to give back to the community</li>
                    <li> Networking opportunities and making new friends</li>
                    <li> Hours toward community service requirements</li>
                </ul>
            </p>

            <p> We invite all interested volunteers to click the button below, and fill in the application!</p>
            <Button href='/' outline color="primary" size='sm'>Volunteer</Button>{' '}
            
            <h2> Donate </h2>
            <p> Make a donation today! </p>
            <p>Your support makes a difference! Your donation will help all minority groups to successfully integrate into their community and meet their needs. </p>

            <Button href='/' outline color="primary" size='sm'>Donate</Button>{' '}
        </ScrollAnimation>
    </div>
    )
}

export default Getinvolved;