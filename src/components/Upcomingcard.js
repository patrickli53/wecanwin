import React from 'react';
import Moment from 'react-moment';

const Upcomingcard = ({title,start,end,info}) =>{
    return (
        <div className='upcomingCard'>
            <div className='upcomingContainer' id='firstUpcoming'>
                <h4>
                    <Moment
                    date={start}
                    parse="YYYY-MM-DD hh:mm"
                    format="Do"
                    />
                </h4>
                <h5>{title}</h5>
            </div>
            <div className='upcomingContainer'>
                <h6>
                    <Moment
                        date={start}
                        parse="YYYY-MM-DD hh:mm"
                        format="MMM"
                    /> 
                </h6>
                
                <h7>
                    <Moment
                        date={start}
                        parse="YYYY-MM-DD hh:mm"
                        format="h:mma"
                    /> -
                     <Moment
                        date={end}
                        parse="YYYY-MM-DD hh:mm"
                        format="h:mma"
                    /> 
                </h7>
            </div>
            <p id='location'>
                {info}
            </p>
            <p id='description'>

            </p>
        </div>
    )
}

export default Upcomingcard;