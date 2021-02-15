import React, {useContext} from 'react';
import { Link as L } from 'react-router-dom';
import {withRouter} from 'react-router';
import {TokenContext, UserInfoContext} from '../App';

const Logout = (props) => {

    const [token, setToken] = useContext(TokenContext);
    const [userName, setUserName] = useContext(UserInfoContext);
    console.log('logout',useContext(TokenContext));

    const handleSubmit = (event) => {
        setToken(false)
        setUserName("")
        props.history.replace("/")
    }

    return(
        <L className="navbar-brand" to="#" onClick={handleSubmit} >
          Log Out
        </L>
    )
}

export default withRouter(Logout);