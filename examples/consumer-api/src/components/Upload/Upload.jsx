import React, { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";

const cloudName = "dbuk6m576";

export default function Upload(props) {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = e.target.elements[0].files[0];
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "rdqqmpve");

    const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const request = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });
    const data = await request.json();

    console.log("URL IMAGE", data.secure_url);
  };

  const handleChange = (e) => {
    const { files } = e.target;
    const file = files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function load() {
      const { result } = reader;
      setUrl(result);
    };
  };

  return (
    <>
      <div style={{ width: "200px" }}>
        <Image style={{ width: "100%" }} src={url} roundedCircle />
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>Upload an image</Form.Label>
          <Form.Control type="file" size="lg" onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
