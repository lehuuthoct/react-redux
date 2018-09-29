import React, { Component } from "react";
import Popup from "react-popup";
import "./Person.css";

class Person extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      errors: {
        firstName: false,
        lastName: false
      }
    };
  }
  handleChange = e => {
    const { name, value } = e.target; // {target: {name, value}} = e
    console.log("handleChange ", name, value);
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    console.log("submit form");
    e.preventDefault();
    // init person data
    const { firstName, lastName, phone, email } = this.state;

    // init err
    this.setState({
      errors: {
        firstName: firstName === "",
        lastName: lastName === ""
      }
    });

    // log info
    const person = { firstName, lastName, phone, email };
    console.log("Data:", person);

    // show info
    if (firstName !== "" && lastName !== "") {
      Popup.create({
        title: "Person Information",
        content: (
          <div>
            <p>
              {" "}
              <strong>Name: </strong> {firstName} {lastName}{" "}
            </p>
          </div>
        ),
        buttons: {
          right: [
            {
              text: "Close",
              action: popup => popup.close() // closes the popup
            }
          ]
        }
      });
    }
  };

  render() {
    return (
      <div className="Person">
        <form onSubmit={this.handleSubmit}>
          {/* first name */}
          <div className="row">
            <label>First name</label>
            <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
              className={this.state.errors.firstName ? "error" : ""}
            />
            {this.state.errors.firstName && (
              <div className="errorMessage">Required field </div>
            )}
          </div>
          {/* last name */}
          <div className="row">
            <label>Last name</label>
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
              className={this.state.errors.lastName ? "error" : ""}
            />
            {this.state.errors.lastName && (
              <div className="errorMessage">Required field</div>
            )}
          </div>
          {/* email */}
          <div className="row">
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          {/* phone */}
          <div className="row">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </div>
          {/* submit */}
          <div className="row">
            <label />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Person;
