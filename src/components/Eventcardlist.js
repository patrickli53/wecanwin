import React from 'react';
import Eventcard from './Eventcard';
import { Container, Row, Col } from 'reactstrap';

const Eventcardlist = ({Eventlist}) => {
    return(
        <div className='eventdeck br3'>
            <Container fluid style={{ paddingLeft: 0, paddingRight: 0}}>
                <Row style={{ marginLeft: 0, marginRight:0}}>
                    {Eventlist.map((user,i) => {
                        return (
                                <Col xs='4' sm='3' md='2' style={{ paddingLeft: 0, paddingRight: 0}}>
                                    <Eventcard 
                                    key={i} 
                                    name={Eventlist[i].name} 
                                    date={Eventlist[i].date} 
                                    image={Eventlist[i].image}
                                    info={Eventlist[i].info}
                                    />   
                                </Col>
                            );
                        })
                    } 
                </Row>
            </Container>
       </div>
    )
}

export default Eventcardlist;