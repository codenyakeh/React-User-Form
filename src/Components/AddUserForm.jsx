import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: ""
    }

  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state)
    this.setState({
      name: "",
      email: "",
      gen: "",
    })


  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
          type="text"
          placeholder="Enter Name" 
          name='name' 
          value={this.state.name}
          onChange={this.handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter email" 
          name='email' 
          value={this.state.email}
          onChange={this.handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Gen</Form.Label>
          <Form.Control 
          type="number" 
          placeholder="@Gen" 
          name="gen" 
          value={this.state.gen}
          onChange={this.handleChange} />
        </Form.Group>
        
      </Form>
    )
  }
}

export default AddUserForm