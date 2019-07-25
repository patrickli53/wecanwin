import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Highlights extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    render(){
        return(
            <div className='highlights'>
                <h3><u> Highlights </u></h3>

                <div className='yearTabsfb highlightTabs'>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                            >
                            2019
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                            >
                            2018
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col xs="12">
                                    <h4>New Horizons for Seniors - Term 2</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img alt="first horizon pic" src={require('../img/horizon2019_1.JPG')}/> 
                                </Col>
                                <Col>

                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col xs="12">
                                    <h4> New Horizons for Seniors - Term 1</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6' lg='4'>
                                    <img alt="first horizon pic" src={require('../img/horizon2018_1.JPG')}/> 
                                </Col>
                                <Col md='6' lg='4'>
                                    <img alt="third horizon pic" src={require('../img/horizon2018_3.JPG')}/> 
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        );
    }
}

export default Highlights;