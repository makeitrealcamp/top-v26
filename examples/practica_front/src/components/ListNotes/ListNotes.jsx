import React, { useEffect } from "react";
import { Row } from "antd";
import { Note } from "./";

export default function ListNotes({ list }) {
  useEffect(() => {});

  return (
    <>
      <Row gutter={16}>
        {list.map((item, i) => (
          <Note key={i} {...item} />
        ))}
      </Row>
    </>
  );
}
