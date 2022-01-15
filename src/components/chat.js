import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './Appp.css';

export function Chat() {
	return (
		<ChatEngine
			height='100vh'
			userName='Mohit'
			userSecret='123123'
			projectID='fe95c938-f10c-473c-bb3e-a0569529e02b'
		/>
	);
}

export default Chat;                               