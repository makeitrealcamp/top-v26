import React, { useState } from "react";
import { Card, Col, Input } from "antd";
import {
  DeleteTwoTone,
  EditTwoTone,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
} from "@ant-design/icons";

export default function Note({ id, description, handleDelete, handleEdit }) {
  const [edit, setEdit] = useState(false);
  const [currentDescription, setCurrentDescription] = useState(description);

  const saveNote = () => {
    handleEdit({ id, description: currentDescription });
  };

  return (
    <Col span={8} key={id} style={{ border: "1px solid gray", margin: "1rem" }}>
      <Card>
        {edit ? (
          <>
            <Input
              value={currentDescription}
              onChange={(e) => setCurrentDescription(e.target.value)}
            />
            <CheckCircleTwoTone
              twoToneColor="#52c41a"
              style={{ cursor: "pointer" }}
              onClick={saveNote}
            />
            <CloseCircleTwoTone
              twoToneColor="red"
              style={{ cursor: "pointer" }}
              onClick={() => setEdit(false)}
            />
          </>
        ) : (
          description
        )}
        <br />
        <DeleteTwoTone
          style={{ cursor: "pointer" }}
          onClick={() => handleDelete(id)}
        />
        <EditTwoTone
          style={{ cursor: "pointer" }}
          onClick={() => setEdit(true)}
        />
      </Card>
    </Col>
  );
}
