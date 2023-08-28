import React, { useState } from 'react';
import '../Login.css';
import LoginService from '../service/LoginService';
import { Link } from 'react-router-dom';
import AuthenticateService from '../service/AuthenticateService';
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: ""
  });

  const handlechange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
    console.log(user);
  };

  const submitUser = (e) => {
    e.preventDefault();
    LoginService.authenticateUser(user).then((res) => {
      if (res.data != null) {
        alert("login successful");
        if (res.data.role === "Admin") {
          AuthenticateService.adminLogin(res.data.id)
          window.location.href = "/Admin";
        } else if (res.data.role === "Customer") {
          AuthenticateService.customerLogin(res.data.id)
          window.location.href = "/Customer";
        } else {
          AuthenticateService.farmerLogin(res.data.id)
          window.location.href = "/FarmerWelcome";
        }
        setUser({
          email: "",
          password: "",
          role: ""
        });
      } else {
        alert("invalid username or password");
        setUser({
          email: "",
          password: "",
          role: ""
        });
      }
    });
  };

  return (
    <>
      <form onSubmit={(e) => { submitUser(e); }}>
        <div>
          <div className="container containera">
            <h1>Login</h1>
            <input
              type="text"
              name="email"
              className="email"
              placeholder="Email..."
              value={user.email}
              onChange={(e) => { handlechange(e); }}
              required
            />
            <br />
            <input
              type="password"
              name="password"
              className="password"
              placeholder="Password..."
              value={user.password}
              onChange={(e) => { handlechange(e); }}
              required
            />
            <br />
            <input type="radio" id="farmer" name="role" value="Farmer" checked={user.role === 'Farmer'} onChange={(e) => { handlechange(e); }}  required/>
            <label htmlFor="farmer" id="farmer" className='far'>Farmer</label>
            <input type="radio" id="customer" name="role" value="Customer" checked={user.role === 'Customer'} onChange={(e) => { handlechange(e); }} />
            <label htmlFor="customer" id="customer">Customer</label>
            <input type="radio" id="admin" name="role" value="Admin" checked={user.role === 'Admin'} onChange={(e) => { handlechange(e); }} />
            <label htmlFor="admin" id="admin">Admin</label>
            <br />
            <button className="btn">Login</button>
          </div>
          <div className="container2">
            <p>Not a member? <a href="/RegistrationForm" className="link">Create Account</a></p>
          </div>
        </div>
      </form>
    </>
  );
}
