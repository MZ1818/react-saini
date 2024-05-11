import React from "react";
import UserClass from "./UserClass";
import UserClass1 from "./UserClass1";
import UserClass2 from "./UserClass2";
// import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("Parent com did mount");
  }

  render() {
    console.log("parent render part");

    return (
      <div>
        <h1>HELLOOOOOOOOOOOOOOOOOOOOOOOOOO</h1>
        {/* <div>
          Logg In User:
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div> */}
        <UserClass2 />
        <UserClass name={"Mufazzal Ahmad"} location={"Kolkata"} />
        <UserClass1 name={"HARRIS"} location={"MOHALI"} />
      </div>
    );
  }
}

export default About;
