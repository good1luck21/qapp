import './App.css';
import React, {useState, useContext} from 'react'
import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Index from './question/Index';
import Show from './question/Show';
import NewQuestion from './question/NewQuestion';
import New from './user/New';
import Login from './user/Login';
import useToken from './auth/useToken';
import Auth from './auth/Auth';
import Logout from './user/Logout';
import useUser from './user/useUser';
import SecuredRoute from './secureroute/SecuredRoute';
// import {TokenContext} from './user/Login';

export const TokenContext = React.createContext();
export const UserInfoContext = React.createContext();

function App() {
  // const [token, setToken] = useContext(TokenContext);
  // setToken("takeru");
  const {token, setToken} = useToken();
  const [userName, setUserName] = useUser("");
  console.log('app',token);
  console.log('app',userName);

  if(!token){
    return (
      <TokenContext.Provider value={[token, setToken]}>
        <UserInfoContext.Provider value={[userName, setUserName]}>
        <div>
            <Header token={token} />
            <Auth token={token} setToken={setToken} />
            <Route exact path="/logout" component={ Logout } />
            {/* <Route exact path="/login" component={ Login } /> */}
            {/* <Route exact path="/signup" component={ New } />
            <Route exact path="/login" component={ Login } /> */}
        </div>
        </UserInfoContext.Provider>
      </TokenContext.Provider>
    )
  }
    return (
      <TokenContext.Provider value={[token, setToken]}>
        <UserInfoContext.Provider value={[userName, setUserName]}>
      <div>
          
          {/* <TestAuth value={ test } /> */}
          <Header />
          <Switch>
            {/* <Route exact path="/" component={ Home } /> */}
            <Route exact path="/signup" component={ New } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/logout" component={ Logout } />
            <SecuredRoute path='/new-question' component={NewQuestion} />
            <Route exact path="/" component={ Index } />
            <Route exact path="/question/:id" component={ Show } />
          </Switch>
      </div>
      </UserInfoContext.Provider>
      </TokenContext.Provider>
    )
}

export default App;
