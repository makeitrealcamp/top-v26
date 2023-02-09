import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", counter: 1 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //Actualizae estado de
    this.setState((state, props) => {
      return { ...state, value: event.target.value };
    });

    this.props.setValue(event.target.value);
  }

  componentDidMount() {
    console.log(
      "Ya se renderizó el componente!! -- Hacer llamado se side effects (APIS)"
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount...");
  }

  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        value={this.state.value}
        type={this.props.type || "text"}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
