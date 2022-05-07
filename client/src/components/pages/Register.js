import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../actions/auth";
import { setAlert } from "../../actions/alerts";
import PropTypes from "prop-types";

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    secondname: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstname, secondname, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ firstname, secondname, email, password });
    }
  };

  return (
    <section>
      <h1>Sign Up</h1>
      <p>
        <i /> Create Your Account
      </p>
      <form onSubmit={onSubmit}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            placeholder="Name"
            name="firstname"
            value={firstname}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Second Name: </label>
          <input
            type="text"
            placeholder="Second Name"
            name="secondname"
            value={secondname}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};
export default connect(null, { setAlert, register })(Register);
