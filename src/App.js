import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

import Login from './components/Login/login.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  render() {
    return (
      <Container fluid='true' className="App">
        <Row className="App-header">
          <Col xs={12}>
            <Login/>     
          </Col>
        </Row>
      </Container>
    );
  }
}

var userHasAuthenticated = authenticated => {
  this.setState({ isAuthenticated: authenticated });
}

export default App;
