import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. fugiat
            assumenda maxime reiciendis molestiae veniam quas repellat, cumque
            quae sed. Aliquam!
          </p>
          <span>Don't you have an account?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button type="button" name="login">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
