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
                                <Col xs='12' sm='9' md='6' lg='3' style={{ paddingLeft: 0, paddingRight: 0}}>
                                    <Eventcard 
                                    key={i} 
                                    title={Eventlist[i].title} 
                                    start={Eventlist[i].start} 
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