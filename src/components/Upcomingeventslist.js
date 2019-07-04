import React from 'react';
import Eventcard from './Eventcard';

const Upcomingeventslist = ({Eventlist}) => {
   const DateConvert = Eventlist.map((i) => {
                        return Date(Eventlist[i].date);
   });

   const currentDate = newDate();

   const upcomingEvents = [];
   
   for(var i=0; i < Eventlist.length; i++){
       if(Dateconvert[i].getMonth() - currentDate[i].getMonth() == 0){
           if(Dateconvert[i].getDate() - currentDate[i].getDate() <= 7 && 
           Dateconvert[i].getDate() - currentDate[i].getDate() >= 0){
                upcomingEvents.push(Eventlist[i]);
           }
       }
       else if(Dateconvert[i].getMonth() - currentDate[i].getMonth() == 1){
           if(Dateconvert[i].getDate() <= 7 && 
            Dateconvert[i].getDate() - currentDate[i].getDate() <= -24 && 
            Dateconvert[i].getDate() - currentDate[i] >= -30){
                upcomingEvents.push(Eventlist[i]);
            }
       }
    } 

    return(
        <div className='eventdeck'>
           <h1>hi</h1>
        </div>
    )
}

export default Upcomingeventslist;