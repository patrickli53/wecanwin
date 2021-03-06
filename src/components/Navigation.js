import React, { Component } from 'react';
import Volunteerform from './Volunteerform';
import Donateform from './Donateform';
import Registerform from './Registerform';

import {
  Button,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './Navigation.css';
import { Link } from 'react-scroll';
import { Link as Redir} from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
      <Navbar scrolling color="light" light expand="md" fixed='top'>
        <NavbarBrand><Redir to='/'><img src={require('../img/logo.png')} width={100}/></Redir></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav inNavbar className='navdrop'>
              <DropdownToggle nav caret >
                <Link
                  activeClass="active"
                  to="what"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  id='whatdrop'>
                  What We Do
                  
                </Link>
              </DropdownToggle>
              <DropdownMenu className='navmenu' >
                <DropdownItem >
                  <Redir to='/events' id='eventItem'>
                    Events
                  </Redir>
                </DropdownItem>
                <DropdownItem>
                  <Redir to='/lessons'  id='lessonItem'>
                    Programs
                  </Redir>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className='navdrop'>
              <DropdownToggle nav caret>
                <Link
                  activeClass="active"
                  to="who"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  id='whodrop'>
                  Who We Are
                </Link>
              </DropdownToggle>
              <DropdownMenu className='navmenu' >
                <DropdownItem >
                  <Redir to='/whopage' id='aboutItem'>
                    About Us
                  </Redir>
                </DropdownItem>
                <DropdownItem >
                  <Redir to='/whopage' id='teamItem'>
                    Our Team
                  </Redir>
                </DropdownItem>
                <DropdownItem >
                  <Redir to='/whopage' id='supportItem'>
                    Our Supporters
                  </Redir>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink >
                <Redir
                  to="/contactus" id='contactItem'>
                  Contact Us
                </Redir>
              </NavLink>
            </NavItem>
            <NavItem>
              <div className='navbtn'>
                {/* <Donateform buttonLabel={'Donate'}/> */}
                <Volunteerform buttonLabel={'Volunteer'}/>
                <Registerform buttonLabel={'Register'}/>
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default Navigation;