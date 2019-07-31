import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Volunteerform extends React.Component {
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
          <ModalHeader toggle={this.toggle}>Volunteer Form</ModalHeader>
          <ModalBody>
          <form id="volunteerForm" name="volunteer-form" accept-charset="utf-8" action="https://formspree.io/info@wecanwin.ca" method="post">
            <fieldset id="fs-frm-inputs">
                <h6>General Information</h6>
                <label for="full-name" className='fullName'>Full Name*</label>
                <br />
                <input type="text" name="name" id="full-name" placeholder="John Smith" required=""/>

                <label for="full-name" className='fullName'>Address*</label>
                <br />
                <input type="text" name="address" id="full-name" placeholder="123 Sugar Street" required=""/>

                <label for="full-name" className='fullName'>City*</label>
                <br />
                <input type="text" name="name" id="full-name" placeholder="Toronto" required=""/>
                
                <label for="full-name" className='fullName'>Postal Code*</label>
                <br />
                <input type="text" name="name" id="full-name" placeholder="M1M 1M1" required=""/>

                <br />
                <label for="email-address" className='emailAddress'>Email Address*</label>
                <br />
                <input type="email" name="email-address" id="email-address" placeholder="email@domain.tld" required=""/>

                <br />
                <label for="telephone" className='phoneNumber'>Telephone Number (Optional)</label>
                <br />
                <input type="telephone" name="telephone" id="telephone" placeholder="(555) 555-5555"/>
                <br />

                <label for="gender" className="gender"> Gender </label>
                <br />
                <select name="gender" id="gender">
                    <option>Male</option>
                    <option> Female</option>
                    <option> Other </option>
               </select>
              
               <br />
               <label for="Preferred Communication" className="comms"> Preferred Method of Communication</label>
               <br />
               <div className='radioButtons'>
                <p><input className='pr2' type="radio" name="PreferredCommunication" value="Phone"/> Phone  </p>
                <p><input type="radio" name="PreferredCommunication" value="Email"/> Email  </p>
                <p><input type="radio" name="PreferredCommunication" value="Both"/> Both  </p>
               </div>
               
               <h6>Education</h6>
                <label for="full-name" className='fullName'>Highest Level of Education*</label>
                <br />
                <input type="text" name="highest-education" id="full-name" required=""/>
               
               <h6>Reason for Volunteering</h6>
                <label for="reason" className="reason"> Please select one or more reasons: * </label>
                <br />
                <p><input type="checkbox" name="reason" value="school"/> School requirement </p>
                <p><input type="checkbox" name="reason" value="passion"/> Passion to serve the community </p>
                <p><input type="checkbox" name="reason" value="work"/> Gain work-related experience </p>
                <p><input type="checkbox" name="reason" value="other"/> Other </p>
               
               <h6>Areas of Interest</h6>
                <label for="area" className="area"> Please select one or more areas in which you would be interested in volunteering in: * </label>
                <br />
                <p><input type="checkbox" name="area" value="seniors"/> Seniors' Programs </p>
                <p><input type="checkbox" name="area" value="youth"/> Youth Programs </p>
                <p><input type="checkbox" name="area" value="newcomers"/> Newcomer's Programs </p>
                <p><input type="checkbox" name="area" value="women"/> Women’s Programs </p>
                <p><input type="checkbox" name="area" value="office"/> Office Support </p>
                <p><input type="checkbox" name="area" value="computer"/> Computer Training </p>
                <p><input type="checkbox" name="area" value="translation"/> Translation (If applicable) </p>
                <p><input type="checkbox" name="area" value="other"/> Other </p>
               <h6> Other Information</h6>
               <label for="hear" className="hear"> How did you hear about We Can Win? </label>
                <br />
                <p><input type="checkbox" name="hear" value="family/friends"/> Family/Friends </p>
                <p><input type="checkbox" name="hear" value="word-of-mouth"/> Youth Programs </p>
                <p><input type="checkbox" name="hear" value="community-agencies"/> Community Agencies </p>
                <p><input type="checkbox" name="hear" value="social-media"/> Social Media </p>
                <p><input type="checkbox" name="hear" value="website"/> Website </p>
                <p><input type="checkbox" name="hear" value="other"/> Other </p>
                
                <label for="situation" className="situation"> What best describes your current situation? </label>
                <br />
                <p><input type="radio" name="situation" value="employed"/> Employed </p>
                <p><input type="radio" name="situation" value="seeking-work"/> Seeking Work </p>
                <p><input type="radio" name="situation" value="student"/> Student </p>
                <p><input type="radio" name="situation" value="other"/> Other </p>
               
                <label for="start-date" className='fullName'>Possible start date*</label>
                <br />
                <input type="text" name="start-date" id="full-name" required=""/>
               
                
            </fieldset>
            <br />
            <input type="submit" value="Submit" className='submitButton'/>
        
          </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Volunteerform;