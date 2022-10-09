import { doc, setDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { db } from "../firebase/config";
import { v4 as uuid } from "uuid";

function AddUserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser = { name, email, gen, id: uuid(), timestamp: serverTimestamp() };

    try {
      const docRef = await setDoc(doc(db, "adminUsers", newUser.id), newUser);
    } catch (e) {
      console.log(e);
    }

    const myUsers = { name, email, gen, id: uuid() };
    await setDoc(doc(db, "admin", myUsers.id), myUsers);

    setName("");
    setEmail("");
    setGen("");
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
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
            type="number"
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

export default AddUserForm;
