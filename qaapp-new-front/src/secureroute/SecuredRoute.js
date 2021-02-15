import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { TokenContext } from '../App';

const SecuredRoute = (props) => {
    const [userToken, setUserToken] = useContext(TokenContext);
    const {component: Component, path} = props;
    return(
        <Route path={path} render={() => 
            userToken ? "/login" : <div></div>
            }
        />
    )
}

export default SecuredRoute;

