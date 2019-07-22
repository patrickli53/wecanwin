import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Team = () => {
    return(
        <div className='team' id='team'>
            <ScrollAnimation animateIn='fadeInRight'>
                <h1 className=' f1 ttu pt3'>
                    <u>Our Team</u>
                </h1>
                <div className='teamContainer'>
                    <article class="mw5 teamCard bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                        <div class="tc">
                            <img src="http://wecanwin.ca/theme/site/img/team-2.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
                            <h1 class="f4 mb2">Sukanya Akula</h1>
                            <h2 class="f5 fw4 red mt0">Excecutive Director</h2>
                        </div>
                    </article>
                    <article class="mw5 teamCard bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                        <div class="tc">
                            <img src="http://wecanwin.ca/theme/site/img/team-1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
                            <h1 class="f3 mb2">Poola Ramnaraine</h1>
                            <h2 class="f5 fw4 red mt0">Advisory Committee Member</h2>
                        </div>
                    </article>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Team;