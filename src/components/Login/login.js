import React, { Component } from 'react';
import ReactDOM from 'react';
import './login.css';
import logo from '../../logo.svg';
import { Container, Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';

class LoginComponent extends Component {
	render() {
	    return (
	    	<Container className="Login">
	        	<Row className="Login-logo">
	          		<Col xs="12">
	          			<img src={logo} alt="Logo"/>
	          		</Col>
	        	</Row>
	        	<Row className="Login-form">
	          		<Col xs="12">
	          			<Form>
	          				<FormGroup>
					        	<Label for="exampleEmail">Enter your email</Label>
					          	<Input type="email" name="email" id="loginEmail" placeholder="insert email" />
					        </FormGroup>
					        <FormGroup>
					          	<Label for="examplePassword">Enter your password</Label>
					          	<Input type="password" name="password" id="loginPassword" placeholder="insert password" />
					        </FormGroup>
					        <Button>LOG IN</Button>
	          			</Form>
	          		</Col>
	        	</Row>
	        	<Row className="Login-notUser">
	          		<Col xs="12">
					        <Button outline>I haven't account yet :_(</Button>
	          		</Col>
	        	</Row>
	      </Container>
	    );
  	}
}

export default LoginComponent;