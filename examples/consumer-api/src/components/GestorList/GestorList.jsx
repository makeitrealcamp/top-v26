import React, { useState, useEffect } from "react";
import {Form, Button} from "react-bootstrap";

function GestorList(props) {
  const [list, setList] = useState([]);
  const [item, setItemState] = useState({});

  const getData = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const url = "http://localhost:4000/gestor";

    fetch(url, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const update = (e) => {
    e.preventDefault()
  };

  useEffect(() => {
    getData();

    () => () => {
      return console.log("component did unmount");
    };
  }, []);

  const setItem = (data) => {
    setItemState(data);
  };

  return (
    <>
      {list.map(({ name, apellido, idgestor }, index) => (
        <ul key={index}>
          <li onClick={() => setItem({ name, apellido, idgestor })}>
            {name}, {apellido}
          </li>
        </ul>
      ))}

      <Form onSubmit={update}>
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control defaultValue={item.name} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Lastname:</Form.Label>
          <Form.Control defaultValue={item.apellido} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default GestorList;
