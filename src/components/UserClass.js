import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count1: 0,
    };

    console.log("child1 constructor");
  }

  componentDidMount() {
    console.log("child1 com did mount");
  }

  render() {
    console.log("child1 render part");

    const { name, location } = this.props;
    const { count, count1 } = this.state;

    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:</h4>
        <h1>COUNT:{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase by 1
        </button>
        <h1>COUNT1:{count1}</h1>
      </div>
    );
  }
}

export default UserClass;
