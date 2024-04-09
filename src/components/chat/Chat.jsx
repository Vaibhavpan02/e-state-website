import React, { useState, useEffect } from 'react';
import './chat.scss';

function Chat() {
    const [openChatInfo, setOpenChatInfo] = useState(null);
    const [messageInput, setMessageInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        // Initial message from the other side
        setChatMessages([
            {
                text: "Hi, I want to know more about property.",
                own: false,
                time: new Date().toLocaleTimeString(),
                name: "Nikhil",
                avatar: "https://tse3.mm.bing.net/th?id=OIP.h0hPZzAziPf3v-srHQTdWQHaHa&pid=Api&P=0&h=180"
            }
        ]);
    }, []);

    const handleOpenChat = (index, personInfo) => {
        setOpenChatInfo({ index, personInfo });
    };

    const handleInputChange = (event) => {
        setMessageInput(event.target.value);
    };

    const handleSendMessage = () => {
        if (messageInput.trim() !== '') {
            setChatMessages([...chatMessages, { text: messageInput, own: true, time: new Date().toLocaleTimeString() }]);
            setMessageInput('');
            // Simulate the other side's response
            simulateResponse(messageInput);
        }
    };

    const simulateResponse = (message) => {
        // Convert the message to lowercase for case-insensitive matching
        const lowerCaseMessage = message.toLowerCase();
        
        if (lowerCaseMessage.includes("yes") || lowerCaseMessage.includes("ok") || lowerCaseMessage.includes("okay")) {
            setTimeout(() => {
                setChatMessages(prevMessages => [
                    ...prevMessages,
                    {
                        text: "Thank you for your assistance. I want to hear more.",
                        own: false,
                        time: new Date().toLocaleTimeString()
                    }
                ]);
            }, 1000);
        } else if (lowerCaseMessage.includes("hello")) {
            setTimeout(() => {
                setChatMessages(prevMessages => [
                    ...prevMessages,
                    {
                        text: "thank you, can you give me some extra information about the property",
                        own: false,
                        time: new Date().toLocaleTimeString()
                    }
                ]);
            }, 1000);
        } else {
            setTimeout(() => {
                setChatMessages(prevMessages => [
                    ...prevMessages,
                    {
                        text: "I'm sorry, I didn't understand. Can you please clarify?",
                        own: false,
                        time: new Date().toLocaleTimeString()
                    }
                ]);
            }, 1000);
        }
    };

    return (
        <div className='chat'>
            <div className="messages">
                <h1>Messages</h1>
                <div className="message" onClick={() => handleOpenChat(0, { name: "Nikhil", avatar: "https://tse3.mm.bing.net/th?id=OIP.h0hPZzAziPf3v-srHQTdWQHaHa&pid=Api&P=0&h=180" })}>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.h0hPZzAziPf3v-srHQTdWQHaHa&pid=Api&P=0&h=180" alt="" />
                    <span>Nikhil</span>
                    <p>Hi, I want to know more about property.</p>
                </div>
                <div className="message" onClick={() => handleOpenChat(1, { name: "Vidit", avatar: "https://tse2.mm.bing.net/th?id=OIP.4TCXWgfu-5O0eo2EV6GWEwHaJ4&pid=Api&P=0&h=180" })}>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.4TCXWgfu-5O0eo2EV6GWEwHaJ4&pid=Api&P=0&h=180" alt="" />
                    <span>Vidit</span>
                    <p>Hi Vaibhav, I liked the property listed.</p>
                </div>
                <div className="message" onClick={() => handleOpenChat(1, { name: "Vivek", avatar: "https://tse2.mm.bing.net/th?id=OIP.H9UYen-_zre2XDocB14GZQHaEK&pid=Api&P=0&h=180" })}>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.H9UYen-_zre2XDocB14GZQHaEK&pid=Api&P=0&h=180" alt="" />
                    <span>Vivek</span>
                    <p>Hi, can you provide some extra detail.</p>
                </div>
                <div className="message" onClick={() => handleOpenChat(1, { name: "Pratibha", avatar: "https://petapixel.com/assets/uploads/2019/02/wH6fpdJC-1.jpg" })}>
                    <img src="https://petapixel.com/assets/uploads/2019/02/wH6fpdJC-1.jpg" alt="" />
                    <span>Pratibha</span>
                    <p>Hi Vaibhav, I want to know more.</p>
                </div>
                <div className="message" onClick={() => handleOpenChat(1, { name: "Avanish", avatar: "https://tse2.mm.bing.net/th?id=OIP.88hQwxL9ILYl7PV_HXgWqgHaE8&pid=Api&P=0&h=180" })}>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.88hQwxL9ILYl7PV_HXgWqgHaE8&pid=Api&P=0&h=180" alt="" />
                    <span>Avanish</span>
                    <p>Hi, can you provide some extra detail.</p>
                </div>
            </div>
            
            {openChatInfo && (
                <div className="chatBox">
                    <div className="top">
                        <div className="user">
                            <img src={openChatInfo.personInfo.avatar} alt="" />
                            {openChatInfo.personInfo.name}
                        </div>
                        <span className='close' onClick={() => setOpenChatInfo(null)}>X</span>
                    </div>
                    <div className="center">
                        {chatMessages.map((chatMessage, index) => (
                            <div className={`chatMessage ${chatMessage.own ? 'own' : 'other'}`} key={index}>
                                <p>{chatMessage.text}</p>
                                <span>{chatMessage.time}</span>
                            </div>
                        ))}
                    </div>
                    <div className="bottom">
                        <textarea value={messageInput} onChange={handleInputChange}></textarea>
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chat;

