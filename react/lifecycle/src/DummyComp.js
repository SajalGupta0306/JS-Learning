import React, { Component } from "react";

export class DummyComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: "",
    };
  }

  componentDidMount(){
      console.log("welcome");
  }

  clickBtn = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidUpdate(){
    console.log("updated");
  }

  componentWillUnmount(){
    console.log("unmounted");
  }

  render() {
    return (
      <div>
        <label>{this.state.count}</label>
        <button onClick={() => this.clickBtn()}>Click Here</button>
      </div>
    );
  }
}

export default DummyComp;
