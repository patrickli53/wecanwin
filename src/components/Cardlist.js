import React from 'react';
import Card from './Card';


const CardList = ({Supportlist}) => {
    return(
        <div>
           {Supportlist.map((user,i) => {
                return (
                    <Card 
                    key={i} 
                    name={Supportlist[i].name} 
                    info={Supportlist[i].info} 
                    logo={Supportlist[i].logo}
                    />
                );
            })
        }
        </div>
    )
}

export default CardList;