import React from 'react';

import ScrollToBottom from 'scroll-to-bottomjs'

import Message from '../Message/Message'

import './Messages.css';

export const Messages = ({ messages, name }) => (
    <ScrollToBottom className="messages">
        {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
    </ScrollToBottom>
);