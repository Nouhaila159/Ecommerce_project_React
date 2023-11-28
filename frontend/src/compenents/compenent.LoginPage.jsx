import React, { useState } from "react";
import '../login.css'; // Make sure to adjust the path based on your project structure
import { Link } from "react-router-dom";

export function LoginPage() {
  const [tab, setTab] = useState('sign-in');

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6 mx-auto p-0">
          <div className="card">
            <div className="login-box">
              <div className="login-snip">
                <input
                  id="tab-1"
                  type="radio"
                  name="tab"
                  className="sign-in"
                  checked={tab === 'sign-in'}
                  onChange={() => handleTabChange('sign-in')}
                />
                <label htmlFor="tab-1" className="tab">
                  Login
                </label>
                <input
                  id="tab-2"
                  type="radio"
                  name="tab"
                  className="sign-up"
                  checked={tab === 'sign-up'}
                  onChange={() => handleTabChange('sign-up')}
                />
                <label htmlFor="tab-2" className="tab">
                  Sign Up
                </label>
                <div className="login-space">
                  {tab === 'sign-in' && (
                    <div className="login">
                      <div className="group">
                      <br/>
                        <label htmlFor="user" className="label">
                          Username
                        </label>
                        <input
                          id="user"
                          type="text"
                          className="input"
                          placeholder="Enter your username"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="pass" className="label">
                          Password
                        </label>
                        <input
                          id="pass"
                          type="password"
                          className="input"
                          data-type="password"
                          placeholder="Enter your password"
                        />
                      </div>
                      <br/>
                      <div className="group">
                        <input
                          id="check"
                          type="checkbox"
                          className="check"
                          checked
                        />
                        <label htmlFor="check">
                          <span id="check" className="icon"></span> Keep me Signed in
                        </label>
                      </div>
                      <br/>
                      <div className="group">
                      <Link to={"/home"} type="submit" className="button centered-text">Sign In</Link>  
                      </div>
                      <div className="hr"></div>
                      <div className="foot">
                        <a href="#">Forgot Password?</a>
                      </div>
                    </div>
                  )}
                  {tab === 'sign-up' && (
                    <div className="sign-up-form">
                      <div className="group">
                      <br/>
                        <label htmlFor="user" className="label">
                          Username
                        </label>
                        <input
                          id="user"
                          type="text"
                          className="input"
                          placeholder="Create your Username"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="pass" className="label">
                          Password
                        </label>
                        <input
                          id="pass"
                          type="password"
                          className="input"
                          data-type="password"
                          placeholder="Create your password"
                        />
                      </div>
                     
                      <div className="group">
                        <label htmlFor="rep_pass" className="label">
                          Repeat Password
                        </label>
                        <input
                          id="rep_pass"
                          type="password"
                          className="input"
                          data-type="password"
                          placeholder="Repeat your password"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="email" className="label">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="text"
                          className="input"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <br/>
                      <div className="group">
                      <Link to={"/home"} type="submit" className="button centered-text">Sign Up </Link>                      </div>
                      
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
