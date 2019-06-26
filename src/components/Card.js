import React from 'react';

const Card = ({name,info,logo}) =>{
    return (
        <div className ='bg-lightest-blue tc dib h6 w5 br3 pa3 ma2 grow bw2 shadow5'>
            <img className='' src={logo} alt='logo' width={200} height={200}/>
            <h3 className='f3 mb2'>{name}</h3>
            <p className='f5 f24 gray mt0'>{info}</p>
        </div>
    )
}

export default Card;