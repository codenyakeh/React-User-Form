import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import './App.css';
import Users from './Components/Users';
import AddUserForm from './Components/AddUserForm';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          name: "perez",
          email: "emricanyakeh@mail.com",
          gen: "21"
        },
        {
          name: "Jon",
          email: "mricanyakeh@mail.com",
          gen: "23"
        },
        {
          name: "job",
          email: "ricanyakeh@mail.com",
          gen: "24"
        },
      ]
    }
  }

  addNewUser = (user) => {
    this.setState({
      users: [...this.state.users, user]

    })
  }
  render() {
    return (
      <>
        <Container fluid style={{marginTop: "3rem"}}>
          <Row>
            <Col md="4">
              <AddUserForm addUser={this.addNewUser}/>
            </Col>
            <Col>
              <Users userData={this.state.users}/>
            </Col>
          </Row>
        </Container>

      </>
    )
  }
}

export default App
