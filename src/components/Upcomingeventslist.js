import React from 'react';
import Eventcard from './Eventcard';

const Upcomingeventslist = ({Eventlist}) => {
   
    return(
        <div className='eventdeck'>
           {Eventlist.filter((user,i) => {
                return (
                     
                );
            })
        }
        </div>
    )
}

export default Upcomingeventslist;