import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Registerform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="primary" outline size={'sm'} onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <form method="POST" action="https://formspree.io/info@wecanwin.ca" >
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="Name" id="Name" placeholder="John Smith" />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="Email" id="Email" placeholder="example@gmail.com" />
                </FormGroup>
                
                <FormGroup>
                    <Label for="phone">Phone Number (Optional)</Label>
                    <Input type="text" name="Phone Number" id="Phone" placeholder="123-456-7890" />
                </FormGroup>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Registerform;