import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

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

  const update = async (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const apellido = e.target.elements[1].value;
    const data = { name, apellido };
    const { idgestor: idGestor } = item;
    const user = JSON.parse(localStorage.getItem("user"));

    // Update in database
    await updateGestor(data, idGestor, user.token);
    getData();
  };

  const updateGestor = async (body, idGestor, token) => {
    try {
      const request = await fetch(`http://localhost:4000/gestor/${idGestor}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      const data = await request.json();
      if (data) {
        console.log("Actualizó correctamente!!");
      }
    } catch (error) {
      console.log(error);
    }
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
        <h1>Update a gestor</h1>
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
