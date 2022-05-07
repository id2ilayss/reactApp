import React, { Fragment, useEffect } from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import Alert from "./components/layout/Alert";
import setAuthToken from "./utils/setAuthToken";

//redux
import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from "./actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Alert />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
