import React, { Component } from "react";
import { connect } from "react-redux";
import { handleIncrease, handleDecrease } from "../redux/counterReducer.js";

class Counter extends Component {
  // function Counter(props) {
  render(props) {
    return (
      <div>
        <h3>Counter</h3>
        <div>Count: {this.props.state.count} </div>
        {/* {/* <h3>Test Name</h3> */}
        <div>Name: {this.props.name}</div>
        <button onClick={() => this.props.handleIncrease(1)}>Increase</button>
        <button onClick={() => this.props.handleDecrease(1)}>Decrease</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    state
    // count: state.count
    // name: state.name
  };
}

export default connect(
  mapStateToProps,
  { handleIncrease, handleDecrease }
)(Counter);
