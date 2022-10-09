import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editUsers } from "../action/actions";

function EditUserForm(props) {
  const [name, setName] = useState(props.userBio.name);
  const [email, setEmail] = useState(props.userBio.email);
  const [gen, setGen] = useState(props.userBio.gen);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //props.editUser(props.userBio.id, { contact, location, number });
    const newUser={
      id:props.userBio.id, name, email, gen };
    dispatch(editUsers(newUser))
    setName("");
    setEmail("");
    setGen("");
    props.hide();
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="Email"
            placeholder="eg. name@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGen">
          <Form.Label>Gen:</Form.Label>
          <Form.Control
            type="Number"
            placeholder="Gen"
            value={gen}
            onChange={(e) => {
              setGen(e.target.value);
            }}
          />
        </Form.Group>

        <Button
          onClick={handleSubmit}
          style={{ backgroundColor: "pink", border: "none" }}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EditUserForm;
