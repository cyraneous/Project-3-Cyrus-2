import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/InfoBar/NavTabs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Reserve from "./pages/Reserve";
// import Message from "./components/Message/Message";
// import Messages from "./components/Messages/Messages";
// import TextContainer from "./components/TextContainer";



import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/reserve" component={Reserve} />
        <Route path='/chat' component={Chat} />
      </div>
    </Router>
  );
}




export default App;
