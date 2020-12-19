// import React, { useState, useEffect } from "react";
// import queryString from 'query-string';
// import io from "socket.io-client";
// import { InfoBar } from '../components/InfoBar/InfoBar';
// import { Input } from '../components/Input/Input';
// import { Messages } from '../components/Messages/Messages';
// import { TextContainer } from '../components/TextContainer/TextContainer'
// import './Chat.css';

// const socket = io.connect('http://localhost:4000')

// // let socket;
// // let ENDPOINT;

// export const Chat = ({ location }) => {
//   const [name, setName] = useState('');
//   const [room, setRoom] = useState('');
//   const [users, setUsers] = useState('');
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const ENDPOINT =

//     useEffect(() => {
//       const { name, room } = queryString.parse(location.search);

//       socket = io(ENDPOINT);

//       setRoom(room);
//       setName(name)

//       socket.emit('join', { name, room }, (error) => {
//         if (error) {
//           alert(error);
//         }
//       });
//     }, [ENDPOINT, location.search]);

//   useEffect(() => {
//     socket.on('message', message => {
//       setMessages(msgs => [...msgs, message]);
//     }, [ENDPOINT]);

//     socket.on("roomData", ({ users }) => {
//       setUsers(users);
//     });
//   }, []);

//   const sendMessage = (event) => {
//     event.preventDefault();

//     if (message) {
//       socket.emit('sendMessage', message, () => setMessage(''));
//     }
//   }


//   return (
//     <div className="outerContainer">
//       <h1>Test</h1>
//       <TextContainer users={users} />
//       <div className="container">
//         <InfoBar room={room} />
//         <Messages messages={messages} name={name} />
//         <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
//       </div>
//     </div>
//   );
// }





// export default Chat;
