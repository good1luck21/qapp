import React from 'react'
import {Redirect, useLocation} from 'react-router-dom';
import New from '../user/New';
import Login from '../user/Login';
import AuthUser from './AuthUser';
import Index from '../question/Index';
import Home from '../component/Home';

const Auth = ({setToken}) => {
  // let urlparams = props.location.href;
  // const { match: { params } } = props;
  const params = useLocation().pathname.replace("/","");

  if(params === "login"){
      return <Login setToken={setToken} />
  }else if(params === "signup"){
      return <New setToken={setToken} />
  }else{
    return <Home />
  }
}

export default Auth;