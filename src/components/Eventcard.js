import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Moment from 'react-moment';


class Eventcard extends React.Component{
  constructor(){
    super();
  }

  render(){
   
    return (
     
      <div className='pa2 eventCard'>
        <Card>
          <CardImg top width='100%' src={this.props.image} alt="event image" />
          <CardBody>
            <CardTitle className='f3'>{this.props.title}</CardTitle>
            <CardSubtitle>
              <Moment
                date={this.props.start}
                parse="YYYY-MM-dd hh:mm"
                format="MMM DD, YYYY h:mma"
              />
            </CardSubtitle>
            <CardText>{this.props.info}</CardText>
            <Button>Register for Free!</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
}
  
  
export default Eventcard;