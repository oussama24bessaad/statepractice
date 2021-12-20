import React , {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import Profile from "./component/Profile";
const myStyle = { 
  textAlign: "center",
  color: "##1654A6",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between"
   };
class App extends React.Component {
  constructor(props) {
  
    super(props);
    this.state = {
      Person: {
        fullName: "Oussama Bessaad",
        bio: "This is me!!!",
        imgSrc: "./oussama bessaad.jpg",
        profession: "Engineer",
      },
      show: false,
      intervall: null,
      timer: 0,
    };
    }
    showVisibility = () => {
      this.setState({
        show: !this.state.show,
      }
      );
    }
      render() {
        return (
          <div style={myStyle}>
            <Button variant="danger" onClick={this.showVisibility}>
              {this.state.show ? "Hide" : "Show"}
            </Button>{" "}
            {this.state.show ? (
              <>
                <img
                  src={this.state.Person.imgSrc}
                  style={{ width: "150px" }}
                  alt="Profile Picture"
                ></img>
                <h3>
                  Nihao! Zhè shì : {" "}
                  <p style={{ color: "yellow" }}>
                    {" "}
                    {this.state.Person.fullName}
                  </p>
                </h3>
                <h3>
                  Profession:{" "}
                  <p style={{ color: "green" }}>
                    {" "}
                    {this.state.Person.profession}
                  </p>{" "}
                  Bio:
                   <p style={{ color: "red" }}>{this.state.Person.bio}</p>
                </h3>
                <h3>Counter: </h3>
                <Profile />
              </>
            ) : (
              <span>Click on this button to Show the Profile</span>
            )}
          </div>
        );
      }
    }

    export default App;