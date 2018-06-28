import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // count: 0,
      list: ["clean floors", "laundry", "fix oven"],
      userInput: ""
    };
  }

  // handleIncrease = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // };

  // handleDecrease = () => {
  //   this.setState({
  //     count: this.state.count - 1
  //   });
  // };

  inputHandler = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  handleClick = () => {
    this.setState({
      list: [...this.state.list, this.state.userInput]
    });
  };
  // handleClick = task => {
  //   this.state.list.push(task);
  //   this.setState({ list: this.state.list });
  // };

  render() {
    // console.log(this.state.list);
    // console.log(this.state.userInput);
    let myList = this.state.list.map((elem, ind) => {
      return <div key={ind}>{elem}</div>;
    });
    return (
      <Provider store={store}>
        <div className="App">
          <Counter
            handleIncrease={this.handleIncrease}
            handleDecrease={this.handleDecrease}
          />
          <h3>To-Do List:</h3>
          <input
            onChange={e => {
              this.inputHandler(e);
            }}
            placeholder="enter task"
          />
          <button onClick={this.handleClick}>
            {/* <button onClick={() => this.handleClick(this.state.userInput)}> */}
            Add to List
          </button>
          {myList}
        </div>
      </Provider>
    );
  }
}

export default App;
