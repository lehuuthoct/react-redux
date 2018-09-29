import React, { Component } from "react";

class Person extends Component {
  handleSubmit = e => {
    console.log("submit form");
    e.preventDefault();

    // log info
    const person = {};
    console.log("Person info ", person);
  };

  render() {
    return (
      <div className="Person">
        <form onSubmit={this.handleSubmit}>
          {/* first name */}
          <div>
            <label>First name:</label>
            <input type="text" name="firstName" onChange={this.handleChange} />
          </div>
          {/* last name */}
          <div>
            <label>Last name:</label>
            <input type="text" name="lastName" onChange={this.handleChange} />
          </div>
          {/* email */}
          <div>
            <label>Email:</label>
            <input type="text" name="email" onChange={this.handleChange} />
          </div>
          {/* phone */}
          <div>
            <label>Phone:</label>
            <input type="text" name="phone" onChange={this.handleChange} />
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
