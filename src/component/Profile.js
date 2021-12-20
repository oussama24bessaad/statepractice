import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      intervall: null,
      timer: 0,
    };
}
componentDidMount() {
    console.log("componentDidMount ()");
    this.setState({
      intervalle: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      ),
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount()");
    clearInterval(this.state.intervall);
  }
  render() {
    return <h3>{this.state.timer}</h3>;
  }
}
export default Profile;