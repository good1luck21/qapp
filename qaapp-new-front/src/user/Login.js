import React, {useState, useContext} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {TokenContext} from '../App';
import {UserInfoContext} from '../App';

// import useTestState from '../auth/testAuth';

// export const TokenContext = React.createContext();

const Login = (props) => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    // const [token, setToken] = useTestState("token");
    const [ token, setToken ] = useContext(TokenContext);
    const [ userName, setUserName ] = useContext(UserInfoContext);
    console.log(useContext(UserInfoContext));



    const handleSubmit = event => {
        event.preventDefault();
        axios({
            url: "http://localhost:8001/login",
            method: "post",
            data: {
                session: {
                    email: email,
                    password: password,
                }
            }
        })
        .then((res) => {
            console.log(res);
            setToken(res.data.data);
            setUserName(res.data.userName);
            props.history.push("/");
        })
        .catch((errors) => {
            console.log(errors);
        })
    }
    return(
      <>
      <div className="container">
      <div className="row">
          <div className="col-12">
              <div className="card border-primary">
                  <div className="card-header"> Sign Up </div>
                  <div className="card-body text-left">
                      <form onSubmit={handleSubmit} >
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email:</label>
                        <input
                          type="text"
                          name="email"
                          onChange={e => setEmail(e.target.value)}
                          className="form-control"
                          placeholder="Give your email."
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password:</label>
                        <input
                          type="text"
                          name="password"
                          onChange={e => setPassword(e.target.value)}
                          className="form-control"
                          placeholder="Input password."
                        />
                      </div>
                      <button className="btn btn-primary" >Submit</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </>
  )
}

export default withRouter(Login);