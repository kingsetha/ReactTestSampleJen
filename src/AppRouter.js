import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import View from "./View";
import Edit from "./Edit";
import ViewR from "./ViewR";
import EditR from "./EditR";
import AddCustomer from "./AddCustomer";
import AddMovie from "./AddMovie";
import Home from "./Home";
// import Login from "./login";
function AppRouter() {
  return (
    <Router class="header">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/AddCustomer">Add Customer</Link>
            </li>
            <li>
              <Link to="/">View Customer</Link>
            </li>
            <li>
              <Link to="/ViewR">View Movie</Link>
            </li>
            <li style={{ marginLeft: "500px" }}>
              <Link to="/find">
                <button class="btn btn-outline-dark" type="submit">
                  <i class="bx bx-search"></i> Login
                </button>
              </Link>
            </li>
            <li style={{ marginLeft: "30px" }}>
              <Link to="/findCus">
                <button class="btn btn-outline-dark" type="submit">
                  <i class="bx bx-search"></i> Register
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <br />
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/update/:id" element={<Edit />} />
        <Route path="/ViewR" element={<ViewR />} />
        <Route path="/EditR/:id" element={<EditR />} />
        <Route path="/AddCustomer" element={<AddCustomer />} />
        <Route path="/AddMovie" element={<AddMovie />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/Login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
