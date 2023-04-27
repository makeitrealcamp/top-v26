import React from "react";
import { Form, Button } from "react-bootstrap";
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';

function Upload(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = e.target.elements[0].files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async function load() {
      const { result } = reader;
      console.log("RESULT ....", result);

      let formData = new FormData();
      formData.append("name", file.name);
      formData.append("file", file, "form-data");


      const req = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data:result}),
      });
      const data = await req.json();
      console.log("dataa ", data);
    };
  };

  const sendImageCloudinary = async (name, file) => {
    const form = new FormData();
    form.append("name", file.name);
    form.append("file", file, "form-data");
    form.append("upload_preset", "rdqqmpve");
    const cloudName = "dbuk6m576";
  
    const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const req = await fetch(apiUrl, {
        method: "POST",
        body: form
    })
    const data = await req.json()
    console.log("URL", data.secure_url)
  };

  const handle = (e) => {
    e.preventDefault()
    const file = e.target.elements[0].files[0];
    sendImageCloudinary('2023-0909', file)
  }

  return (
    <Form onSubmit={handle}>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Large file input example</Form.Label>
        <Form.Control type="file" size="lg" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Upload;
