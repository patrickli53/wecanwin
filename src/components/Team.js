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
                    <article class="mw5 teamCard br3 pa2 pa4-ns mv2 ba b--black-30">
                        <div class="tc cardColor">
                            <img src="http://wecanwin.ca/theme/site/img/team-2.jpg" class="br-100 h4 w4 dib ba b--black-20 pa2" title="Photo of a kitty staring at you"/>
                            <h1 class="f4 mb1">Sukanya Akula</h1>
                            <h2 class="f5 fw4 mt0">Excecutive Director</h2>
                        </div>
                    </article>
                    <article class="mw5 teamCard br3 pa2 pa4-ns mv2 ba b--black-30">
                        <div class="tc cardColor">
                            <img src="http://wecanwin.ca/theme/site/img/team-1.jpg" class="br-100 h4 w4 dib ba b--black-20 pa2" title="Photo of a kitty staring at you"/>
                            <h1 class="f4 mb1">Poola Ramnaraine</h1>
                            <h2 class="f5 fw4 mt0">Advisory Committee Member</h2>
                        </div>
                    </article>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Team;