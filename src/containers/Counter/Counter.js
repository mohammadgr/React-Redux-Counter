import React, { useState } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/ConterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const conterChangeHandler = (action, value) => {
    switch (action) {
      case "inc":
        return () => setCounter(counter + 1);
      case "dec":
        return () => setCounter(counter - 1);
      case "add":
        return () => setCounter(counter + value);
      case "sub":
        return () => setCounter(counter - value);
      default:
        return 0;
    }
  };

  return (
    <div>
      <CounterOutput value={props.ctr} />
      <CounterControl label={"افزایش"} clicked={props.onIncrement} />
      <CounterControl label={"کاهش"} clicked={props.onDecrease} />
      <CounterControl label={"افزودن 2"} clicked={props.onAdd} />
      <CounterControl label={"کاهش 2"} clicked={props.onSub} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ctr: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrease: () => dispatch({ type: "DECREMENT" }),
    onAdd: () => dispatch({ type: "ADD", value: 2 }),
    onSub: () => dispatch({ type: "SUB", value: 2 })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
