import React, { useState } from 'react';
import axios from 'axios';

const New = (props) => {

    const [myname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();
        const resp = await axios({
            method: "POST",
            url: "http://localhost:8001/users",
            data:{ user:{
                name: myname,
                email: email,
                password: password,
                password_confirmation: password_confirmation,}
            }
        })
        console.log(resp);
        // TODO:会員登録後の処理をここに記載。まずはログインでtoken取得。
        props.setToken(resp.data.user.remember_digest);

    }

    return(
        <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="card border-primary">
                    <div className="card-header"> Sign Up </div>
                    <div className="card-body text-left">
                        <form onSubmit={handleSubmit} >
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Name:</label>
                          <input
                            type="text"
                            name="myname"
                            onChange={e => setName(e.target.value)}
                            className="form-control"
                            placeholder="Give your name."
                          />
                        </div>
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
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Password_confirmation:</label>
                          <input
                            type="text"
                            name="password"
                            onChange={e => setPasswordConfirmation(e.target.value)}
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
    )
}

export default New;