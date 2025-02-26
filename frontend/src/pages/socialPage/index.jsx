import React, { useState } from 'react';
import './social.sass';
import NavbarItems from '../../components/Navbar';
import { FaPaperPlane, FaSearch } from 'react-icons/fa';

const Social = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      user: "Usuário",
      messages: [
        { text: "Olá, estou interessado no seu trabalho, podemos agendar uma reunião?", sender: "other" },
        { text: "Claro, me avise quando estiver disponível.", sender: "user" },
        { text: "Que tal amanhã às 10h?", sender: "other" },
      ],
    },
    {
      user: "Usuário",
      messages: [
        { text: "Olá, gostaria de discutir um projeto com você.", sender: "other" },
      ],
    },
    {
      user: "Usuário",
      messages: [
        { text: "Ei, podemos fazer uma ligação rápida amanhã?", sender: "other" },
      ],
    },
  ]);

  const [selectedChat, setSelectedChat] = useState(chatHistory[0]);
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const updatedMessages = [...selectedChat.messages, { text: inputValue, sender: "user" }];
      const updatedChat = { ...selectedChat, messages: updatedMessages };
      setSelectedChat(updatedChat);

      setChatHistory(chatHistory.map(chat =>
        chat.user === selectedChat.user ? updatedChat : chat
      ));

      setInputValue('');
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChatSelection = (user) => {
    const chat = chatHistory.find(chat => chat.user === user);
    setSelectedChat(chat);
  };

  const filteredChats = chatHistory.filter(chat =>
    chat.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.messages.some(msg => msg.text.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="social-container">
      <NavbarItems activePage="social" />
      <div className="chat-history">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="chat-list">
          {filteredChats.map((chat, index) => (
            <div
              key={index}
              className="chat-item"
              onClick={() => handleChatSelection(chat.user)}
            >
              <div className="chat-item-content">
                <div className="chat-item-header">
                  <div className="profile-pic"></div>
                  <div>
                    <p className="username">{chat.user}</p>
                    <p className="last-message">{chat.messages[chat.messages.length - 1].text}</p>
                  </div>
                </div>
                <div className="message-time">11:15</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="chat-box">
        <div className="chat-header">
          <div className="profile-pic large"></div>
          <p className="chat-username">{selectedChat.user}</p>
        </div>
        <div className="messages">
          {selectedChat.messages.map((msg, index) => (
            <div
              key={index}
              className={`message-bubble ${msg.sender === 'user' ? 'user-message' : 'other-message'}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="escreva sua mensagem..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type='submit' className="send-icon"><FaPaperPlane onClick={handleSendMessage} /></button>
        </div>
      </div>
    </div>
  );
};

export default Social;