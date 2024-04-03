import React from "react";

class UserClass2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        login: "Default",
        avatar_url: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/MZ1818");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, login, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Login:{login}</h3>
        <img src={avatar_url} alt="" />
      </div>
    );
  }
}

export default UserClass2;
