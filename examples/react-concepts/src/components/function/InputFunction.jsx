import React, { useEffect, useState } from "react";

const InputFunction = (props) => {
  const [text, setText] = useState("default");

  // Get componentDidMount = Montaje en el DOM
  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  // Get componentDidUpdate = Actualización de props o estados
  useEffect(() => {
    console.log("componentDidUpdate", text);

    // Get componentWillUnmount - Desmontaje
    return () => {
      console.log("componentWillUnmount");
    };
  }, [text]);

  const handleChange = (event) => {
    setText(event.target.value);
    props.setValue(event.target.value);
  };

  return (
    <input
      placeholder={props.placeholder}
      value={text}
      type={props.type || "text"}
      onChange={handleChange}
    />
  );
};

export default InputFunction;
