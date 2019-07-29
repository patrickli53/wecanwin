import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Team = () => {
    return(
        <div className='team' id='team'>
            <ScrollAnimation animateIn='fadeInRight'>
                <h1 className='teamTitle f1 ttu pt3'>
                    <u>Our Team</u>
                </h1>
                <div className='teamContainer'>
                    <article class="teamCard br3 pa2 pa4-ns mv2 ba b--black-30">
                        <div class="tc cardColor">
                            <img src={require('../img/Sukanya.jpg')} class="br-100 h4 w4 dib ba b--black-20 pa2" title="Photo of a kitty staring at you"/>
                            <h1 class="f4 mb1">Sukanya Akula</h1>
                            <h2 class="f5 fw4 mt0">Excecutive Director</h2>
                            <p>Project Management Professional by trade,  pioneered in guided about 600 
                            youth,women,seniors,immigrant families, trained, advised,provided career
                             oriented services to all citizens of Canada.
                            </p> 
                        </div>
                    </article>
                    <article class="teamCard br3 pa2 pa4-ns mv2 ba b--black-30">
                        <div class="tc cardColor">
                            <img src={require("../img/committee member.jpg")} class="br-100 h4 w4 dib ba b--black-20 pa2" title="Photo of a kitty staring at you"/>
                            <h1 class="f4 mb1">Poola Ramnaraine</h1>
                            <h2 class="f5 fw4 mt0">Advisory Committee Member</h2>
                            <p>Experienced in guiding and assisting women, youth, seniors and special needs in all stages of life. 
                            Possesses rich volunteer experiences with Toronto Police services and non-profit organizations
                            for more than 20 years. 
                            </p>
                        </div>
                    </article>
                    <article class="teamCard br3 pa2 pa4-ns mv2 ba b--black-30">
                        <div class="tc cardColor">
                            <img src={require('../img/ram.jpg')} class="br-100 h4 w4 dib ba b--black-20 pa2" title="Photo of a kitty staring at you"/>
                            <h1 class="f4 mb1">Ram Verankki</h1>
                            <h2 class="f5 fw4 mt0">Program Manager</h2>
                            <p> An Information Technology professional with 20+ years 
                            experience. Certified Project Management Professional (PMP)
                            ITIL Certified. Worked for York University as System Analyst. 
                            A passionate supporter to train seniors and youth in computer 
                            specific skills.</p>
                        </div>
                    </article>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Team;