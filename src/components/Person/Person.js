import React, { Component } from "react";

class Person extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
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

    // log info
    const person = { firstName, lastName, phone, email };
    console.log("Data:", person);
  };

  render() {
    return (
      <div className="Person">
        <form onSubmit={this.handleSubmit}>
          {/* first name */}
          <div>
            <label>First name:</label>
            <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
          </div>
          {/* last name */}
          <div>
            <label>Last name:</label>
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
          </div>
          {/* email */}
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          {/* phone */}
          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </div>
          {/* submit */}
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Person;
