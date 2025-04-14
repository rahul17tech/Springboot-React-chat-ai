import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [question, setQuestion] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!question.trim()) return;

    const newChat = [...chat, { type: 'user', text: question }];
    setChat(newChat);
    setLoading(true);
    setQuestion('');

    try {
      const response = await axios.post('http://localhost:8888/qna/ask', {
        question: question
      });

      const aiText = response.data.candidates[0].content.parts[0].text;

      setChat([...newChat, { type: 'ai', text: aiText }]);
    } catch (error) {
      setChat([...newChat, { type: 'ai', text: 'Error getting response!' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };


  return (
    <div className="app">
      <h1>Gemini Chat</h1>

      <div className="chat-box">
        {chat.map((msg, idx) => (
          <div key={idx} className={`bubble ${msg.type}`}>
            {msg.text}
          </div>
        ))}

        {loading && <div className="bubble ai typing">Typing...</div>}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={question}
          placeholder="Ask something..."
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
