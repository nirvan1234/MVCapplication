import React, { Component } from "react";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
}
increment(){
    this.setState({
        count :this.state.count+1
    })
}


  render() {
    return (
      <>
        <h1>Count {this.state.count}</h1>
        <button
          onClick={() => {
           this.increment();
          }}
        >
          Increament count
        </button>
      </>
    );
  }
}


export default About;
