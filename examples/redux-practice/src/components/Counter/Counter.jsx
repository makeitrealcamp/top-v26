import React from "react";
import { connect } from "react-redux";
import {
  counterAdd,
  counterSubstract,
} from "../../redux/actions/counterAction";

const Counter = ({counter, counterAdd, counterSubstract}) => {
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={counterAdd}>+</button>
      <button onClick={counterSubstract}>-</button>
    </div>
  );
};

const mapStateToProps = ({ counter }) => {
  return {
    counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    counterAdd: () => dispatch(counterAdd()),
    counterSubstract: () => dispatch(counterSubstract()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
