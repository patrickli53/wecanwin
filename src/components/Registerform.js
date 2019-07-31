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
          <ModalHeader toggle={this.toggle}>Registration</ModalHeader>
          <ModalBody>
            <form id="fs-frm" name="registration-form" accept-charset="utf-8" action="https://formspree.io/info@wecanwin.ca" method="post">
                <fieldset id="fs-frm-inputs">
                    <label for="full-name" className='fullName'>Full Name</label>
                    <br />
                    <input type="text" name="name" id="full-name" placeholder="John Smith" required=""/>
                    <br />
                    <label for="email-address" className='emailAddress'>Email Address</label>
                    <br />
                    <input type="email" name="email-address" id="email-address" placeholder="email@domain.tld" required=""/>
                    <br />
                    <label for="telephone" className='phoneNumber'>Telephone Number (Optional)</label>
                    <br />
                    <input type="telephone" name="telephone" id="telephone" placeholder="(555) 555-5555"/>
                </fieldset>
                <br />
                <input type="submit" value="Submit" className='submitButton'/>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Registerform;