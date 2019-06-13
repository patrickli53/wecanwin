import React, { Component } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
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
//import { Link } from 'react-router-dom';

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
        <Navbar color='light' light expand="md">
          <NavbarBrand href="/"><img src='http://wecanwin.ca/theme/site/img/logo7.png' alt='logo' width='100' height='50'></img></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar className='navdrop'>
              <DropdownToggle nav caret>
                <Link
                  activeClass="active"
                  to="what"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}>
                  What We Do
                </Link>
              </DropdownToggle>
              <DropdownMenu className='navmenu' >
                <DropdownItem>
                  Services
                  </DropdownItem>
                <DropdownItem>
                  Lessons
                  </DropdownItem>
                <DropdownItem>
                  Events
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
                  offset={0}
                  duration={500}>
                  Who We Are
                </Link>
              </DropdownToggle>
              <DropdownMenu className='navmenu' >
                <DropdownItem>
                  About Us
                  </DropdownItem>
                <DropdownItem>
                  Our Team
                  </DropdownItem>
                <DropdownItem>
                  Our Supporters
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}>
                  Contact Us
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <div className='navbtn'>
                <Button href='/' outline color="primary" size='sm'>Donate</Button>{' '}
                <Button href='/' outline color="primary" size='sm'>Volunteer</Button>{' '}
                <Button href='/' outline color="primary" size='sm'>Register</Button>{' '}
              </div>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;