import { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";
import { useDispatch } from "react-redux";
import { deleteUser } from "../action/actions";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function User(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteDoc(doc(db, "adminUsers", props.userBio.id));
    } catch (e) {
      console.log(e);
    }
    //props.delete(props.userBio.id);
    //dispatch(deleteUser(props.userBio.id));
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Codetrain Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            editUser={props.editUser}
            userBio={props.userBio}
            hide={handleClose}
          />
        </Modal.Body>
      </Modal>
      <Col md={6} style={{ marginBottom: "10px" }}>
        <Card>
          <Card.Body>
            <Card.Title>Name:{props.userBio.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Email:{props.userBio.email}
            </Card.Subtitle>
            <Card.Text>Gen:{props.userBio.gen}</Card.Text>
            <Button
              href="#"
              size="sm"
              style={{ backgroundColor: "pink", border: "none" }}
              onClick={handleShow}
            >
              Edit
            </Button>
            <Button
              href="#"
              size="sm"
              style={{
                backgroundColor: "pink",
                border: "none",
                marginLeft: "5px",
              }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default User;
