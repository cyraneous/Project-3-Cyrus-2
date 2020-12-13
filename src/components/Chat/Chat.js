import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import React from "react";
import io from "socket.io-client";

import { InfoBar } from '../InfoBar/InfoBar';
import { Input } from '../Input/Input';
import { Messages } from '../Messages/Messages';
import { TextContainer } from '../TextContainer/TextContainer'

import './Chat.css';

let socket;

export const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);



  function Chat() {
    return (
      <div>
        <h1>Virtual Study Buddy</h1>
        <p>
          <h2>Room 1 Topic</h2>
        User1<br></br>
        Incoming<br></br>
        Outgoing<br></br>
          <br></br>
        User2<br></br>
        Incoming<br></br>
        Outgoing<br></br>
        </p>
      </div>
    );
  }

  export default Chat;
