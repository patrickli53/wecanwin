import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';



const Whatpage = () => {
    return(
        <div className='whatpage' id='what'>
            <ScrollAnimation animateIn='fadeInRight'>
                <h1 className=' f1 ttu pl6 pt5'>
                    <u>What We Do</u>
                </h1>
               
                <div className="pl6 pt5 whatContainer">
                    <img
                        src={require('../img/create.svg')}
                        className="icon bw2 br-100 ba b--light-blue h4 w4 grow shadow bg-white" alt="create" />
                    <div className='textContainer'>
                        <h4 className='title pl3'> <u>WE CREATE</u>  </h4>
                        <p className='desc pl3 pr7 pt3 '>
                            <ul>
                                <li> Opportunities for youth, newcomers, women, seniors, and minority groups</li>
                                <li>Identify the potential of individuals who are seriously commited to serve their community and their individual growth</li>
                                <li> Integrate and improve economic social well-being in a safe environment</li>
                            </ul>
                        </p>
                    </div>
                    
                </div>
                <div className="pt2 assistContainer">
                    <img
                        src={require('../img/cross.svg')}
                        className="icon bw2 br-100 ba b--light-blue h4 w4 dib grow shadow bg-white mr6 ml3" alt="create" 
                    />
                    <div>
                    <h4 className='tr pr3'> <u>WE ASSIST</u>  </h4>
                        <p className=' pt3 assisttext'> 
                            <ul>
                                <li> Individuals in adapting to Canadian society</li>
                                <li> Contributing and engaging in the communities</li>
                                <li> Maintaining positive emotional good health for individuals</li>
                            </ul>
                        </p>
                    </div>
                    
                   
                </div>

                <div className="pl6 pt2 pb5 whatContainer">
                    <img
                        src={require('../img/briefcase.svg')}
                        className="icon bw2 br-100 ba b--light-blue h4 w4 dib grow shadow bg-white" alt="create" />    
                    <div className='textContainer'>
                        <h4 className='title pl3'> <u>WE SUPPORT</u>  </h4>
                            <p className='desc pl3 pr7 pt3 '>
                                <ul>
                                    <li> Students to choose the careers of their choice and match them with colleges and universities</li>
                                    <li> Individuals that follow a path that matches their passion, skills, knowledge and goals</li>
                                </ul>
                            </p>
                    </div>
                   
                </div> 
            </ScrollAnimation>
        </div>
    )
}

export default Whatpage;