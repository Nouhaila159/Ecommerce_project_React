import React, { useState } from "react";
import '../../login.css'; // Make sure to adjust the path based on your project structure
import { Link } from "react-router-dom";
import { addUser} from '../../sevices/login.services';

export function LoginPage() {
  const [tab, setTab] = useState('sign-in');
  const [lName,setLname]=useState("");
  const [fName,setFname]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  async function handlForm(event){
    event.preventDefault(); 
    const user={"lName":lName,"fName":fName,"email":email,"password":password}
    await addUser(user);
  }

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
                      <Link to={"/admin"} type="submit" className="button centered-text">Sign In</Link>  
                      </div>
                      <div className="hr"></div>
                      <div className="foot">
                        <a href="#">Forgot Password?</a>
                      </div>
                    </div>
                  )}
                  {tab === 'sign-up' && (
                    <div className="sign-up-form">
                      <br/>
                      <div className="group">
                        <label htmlFor="user" className="label">
                          First Name
                        </label>
                        <input
                          id="user"
                          type="text"
                          className="input"
                          onChange={e=>setLname(e.target.value)}
                          placeholder="Create your First Name"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="userl" className="label">
                          Last Name
                        </label>
                        <input
                          id="userl"
                          type="text"
                          className="input"
                          onChange={e=>setFname(e.target.value)}
                          placeholder="Create your Last Name"
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
                          onChange={e=>setEmail(e.target.value)}
                          placeholder="Enter your email address"
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
                          onChange={e=>setPassword(e.target.value)}
                          placeholder="Create your password"
                        />
                      </div>
                      <br/>
                      <div className="group">
                      <Link to={"/admin"}>
                        <button
                              type="button"
                              className="button centered-text"
                              onClick={(e) => handlForm(e)}
                            >
                      Sign Up </button></Link>                      
                      </div>
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
