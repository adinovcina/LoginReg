import React from "react";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header" style={{ fontWeight: "bold" }}>
          Login
        </div>
        <div className="content">
          <div className="image">
            <img
              src="https://previews.123rf.com/images/artinspiring/artinspiring1701/artinspiring170100620/70391807-two-steps-authentication-on-computer-login-and-password-verification-with-sms-on-smartphone-.jpg"
              alt=""
            />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button className="btn" type="button">
            Login
          </button>
        </div>
      </div>
    );
  }
}
