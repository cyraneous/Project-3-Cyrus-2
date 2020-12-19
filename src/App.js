import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/InfoBar/NavTabs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Chat from "./pages/Chat";
import Reserve from "./pages/Reserve";
// import Message from "./components/Message/Message";
// import Messages from "./components/Messages/Messages";
// import TextContainer from "./components/TextContainer";
import { useAuth0 } from "@auth0/auth0-react";
import {isAuthenticated} from '@auth0/auth0-react'



import './App.css';


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Switch>
          <Route exact path="/" component={Home} />
          
          
          <Route path="/reserve" component={Reserve} />
          <Route path='/chat' component={Chat} />
        </Switch>
      </div>

    </Router>
  );
}




export default App;
