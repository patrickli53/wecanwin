import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Moment from 'react-moment';


const Eventcard = ({title,start,image,info}) => {
  return (
    <div className='pa2 eventCard'>
      <Card>
        <CardImg top width='100%' src={image} alt="event image" />
        <CardBody>
          <CardTitle className='f3'>{title}</CardTitle>
          <CardSubtitle>
            <Moment
              date={start}
              parse="YYYY-MM-dd hh:mm"
              format="MMM D, YYYY h:mma"
            />
          </CardSubtitle>
          <CardText>{info}</CardText>
          <Button>Register for Free!</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Eventcard;