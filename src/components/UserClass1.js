import React from "react";

class UserClass1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count1: 0,
    };

    console.log("child2 constructor");
  }

  componentDidMount() {
    console.log("child2 com did mount");
  }

  render() {
    console.log("child2 render part");

    const { name, location } = this.props;

    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:</h4>
      </div>
    );
  }
}

export default UserClass1;
