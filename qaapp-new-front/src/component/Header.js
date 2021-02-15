import React, {useContext} from 'react';
import { Link as L } from 'react-router-dom';
import Logout from '../user/Logout';
import {TokenContext} from '../App';
import {UserInfoContext} from '../App';
// import {TokenContext} from '../user/Login';

const Header = (props) => {
    
    const [token, setToken] = useContext(TokenContext);
    const [userName, setUserName] = useContext(UserInfoContext);
    // setTest("test");
    console.log(useContext(TokenContext));

    return(
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <L className="navbar-brand" to="/">
                Q&Aqq
            </L>
            <div>
              {userName && <label className="text-success">logedin as: {userName}</label>}
              {token ? 
              (
                 <Logout />
                // <p>Logout</p>
              )
               : 
              (<p>
                <L className="navbar-brand" to="/signup">
                    Sign Up
                </L>
                <L className="navbar-brand" to="/login">
                    Log in
                </L>
                </p>
              )
              }
            </div>
        </nav>
    )
}

export default Header;