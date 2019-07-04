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
                        src={require('./create.svg')}
                        className="icon bw2 br-100 ba b--light-blue h4 w4 grow shadow bg-white" alt="create" />
                    <div className='textContainer'>
                        <h4 className='title pl3'> <u>WE CREATE</u>  </h4>
                        <p className='desc pl3 pr7 mr7 pt3 '>
                    Opportunities for youth, newcomers, Women and the special needs population. Identify the potential of Individuals who are seriously committed to serve the community and their individual growth. Guide Immigrants, women, youth, people with special needs to Integrate, improve, economic social well being within a safe environment.
                        </p>
                    </div>
                    
                </div>
                <div className="pt2 assistContainer">
                    <img
                        src={require('./cross.svg')}
                        className="icon bw2 br-100 ba b--light-blue h4 w4 dib grow shadow bg-white mr6" alt="create" />
                    <div>
                    <h4 className='tr pr3'> <u>WE ASSIST</u>  </h4>
                    <p className='pl7 ml7 pt3 assisttext'> Newcomers adapt to Canadian society, to be engaged, contribute to the communities, provide and maintain positive emotional good health for the individuals across all of Ontario and Canada.</p>
                    </div>
                    
                   
                </div>

                <div className="pl6 pt2 pb5 whatContainer">
                    <img
                        src={require('./briefcase.svg')}
                        className="icon bw2 br-100 ba b--light-blue h4 w4 dib grow shadow bg-white" alt="create" />    
                    <div className='textContainer'>
                        <h4 className='title pl3'> <u>WE SUPPORT</u>  </h4>
                        <p className='desc pl3 pr7 mr7 pt3 '>
                        Students to choose the careers of their choice and match up with colleges and universities. We provide details and research material done by our teams. Students choose the best courses as per their choice and that matches the passion, skills, knowledge and goals.
                        </p>
                    </div>
                   
                </div> 
            </ScrollAnimation>
        </div>
    )
}

export default Whatpage;