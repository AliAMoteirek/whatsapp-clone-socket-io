import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

const Login = ({ onIdSubmit }) => {
  // We use it instead of onChange
  const idRef = useRef();

  const handelSubmit = (event) => {
    event.preventDefault();

    onIdSubmit(idRef.current.value);
  };

  const createNewId = () => {
    onIdSubmit(uuidV4);
  };

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handelSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <div className="p-2 mr-2">
          <Button type="submit">Login</Button>
          <Button onClick={createNewId} variant="secondary">
            Create A New Id
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
