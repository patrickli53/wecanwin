import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Eventcard = ({name,date,image,info}) => {
  return (
    <div className='pa2'>
      <Card>
        <CardImg top width='100%' src={image} alt="event image" />
        <CardBody>
          <CardTitle className='f3'>{name}</CardTitle>
          <CardSubtitle>{date}</CardSubtitle>
          <CardText>{info}</CardText>
          <Button>Register for Free!</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Eventcard;