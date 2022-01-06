import { Link } from "@reach/router";
import { useState } from "react";
import axios from "axios";

function Login({ setIsLogged }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  function onChange(e) {
    const { name, value } = e.target;

    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", user);
         
      localStorage.setItem("tokenStore", res.data.token);
      setIsLogged(true);
    } catch (error) {
      error.response.data.error && setError(error.response.data.error);
    }
  }

  return (
    <div className="section">
      {error !== null ? (
        <div>
          <article className="message is-danger">
            <div className="message-body">{error}</div>
          </article>
        </div>
      ) : null}

      <h1 className="title is-size-1 has-text-weight-bold has-text-centered">
        Login
      </h1>

      <form onSubmit={onSubmit}>
      <label htmlFor="" className="label mt-4">
        Email Address
      </label>
      <input
         required
        type="email"
        className="input"
        name="email"
        value={user.email}
        onChange={onChange}
       
      />

      <label htmlFor="" className="label mt-4">
        Password
      </label>
      <input
        required
        type="password"
        className="input"
        name="password"
        value={user.password}
        onChange={onChange}
       
      />

      <button type='submit' className="mt-4 button is-primary">
        <strong>Submit</strong>
      </button>

      </form>
    </div>
  );
}

export default Login;
