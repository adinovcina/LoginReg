import React from "react";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header" style={{ fontWeight: "bold" }}>
          Register
        </div>
        <div className="content">
          <div className="image">
            <img
              src="http://pomepos.com/wp-content/uploads/2015/01/LoginRed.jpg"
              alt=""
            />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button className="btn" type="button">
            Register
          </button>
        </div>
      </div>
    );
  }
}
