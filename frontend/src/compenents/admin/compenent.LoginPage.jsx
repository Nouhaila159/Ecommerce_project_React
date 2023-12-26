import React, { useState } from "react";
import '../../login.css'; // Make sure to adjust the path based on your project structure
import { addUser, userLogin} from '../../sevices/login.services';
import { useNavigate } from 'react-router-dom';


export function LoginPage() {
  const [tab, setTab] = useState('sign-in');
  const [lName,setLname]=useState("");
  const [fName,setFname]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();   


  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  async function handlForm(event){
    event.preventDefault(); 
    const user={"lName":lName,"fName":fName,"email":email,"password":password}
    await addUser(user);
  }

  async function handlForm2(event){
    event.preventDefault(); 
    const rep= await userLogin({"email":email,"password":password})
    const token= rep.data;
    await localStorage.setItem("jwtToken",token); 
    navigate("/admin/products");  
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
                          Email
                        </label>
                        <input
                          id="user"
                          type="text"
                          className="input"
                          placeholder="Enter your email"
                          onChange={e=>setEmail(e.target.value)}
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
                          onChange={e=>setPassword(e.target.value)}
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
                        <button
                              type="button"
                              className="button centered-text"
                              onClick={(e) => handlForm2(e)}
                            >
                      Sign In </button>                     
                      </div>

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
                        <button
                              type="button"
                              className="button centered-text"
                              onClick={(e) => handlForm(e)}
                            >
                      Sign Up </button>                    
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
