import React from 'react';
import Moment from 'react-moment';

const Upcomingcard = ({title,start,end,info}) =>{
    return (
        <div className='upcomingCard'>
            <div className='upcomingContainer' id='firstUpcoming'>
                <h4>
                    <Moment
                    date={start}
                    parse="YYYY-MM-dd hh:mm"
                    format="DD"
                    />
                </h4>
                <h5>{title}</h5>
            </div>
            <div className='upcomingContainer'>
                <h6>
                    <Moment
                        date={start}
                        parse="YYYY-MM-dd hh:mm"
                        format="MMM"
                    /> 
                </h6>
                
                <h7>
                    <Moment
                        date={start}
                        parse="YYYY-MM-dd hh:mm"
                        format="h:mma"
                    /> -
                     <Moment
                        date={end}
                        parse="YYYY-MM-dd hh:mm"
                        format="h:mma"
                    /> 
                </h7>
            </div>
            <p>
                {info}
            </p>
        </div>
    )
}

export default Upcomingcard;