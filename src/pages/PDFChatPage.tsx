import React, { useState, useContext, useEffect } from 'react';
import FileUpload from './FileUpload';
import  AuthContext  from './AuthContext';  // Assuming you have an AuthContext

import '../styles/UploadPage.css';

interface ChatMessage {
  question: string;
  answer: string;
  timestamp: string;
}

const PDFChatPage: React.FC = () => {
  const [pdfFiles, setPdfFiles] = useState<File[]>([]);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const authContext = useContext(AuthContext);

  const handleUpload = (files: File[]) => {
    setPdfFiles(prev => [...prev, ...files]);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") {
      console.error("Cannot send an empty message.");
      return;
    }
    if (!authContext?.authToken) {
      console.error("Authorization token is not available.");
      return;
    }

    const response = await fetch('http://127.0.0.1:8000/ask_question/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authContext.authToken.access}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question: inputMessage })
    });
    if (response.ok) {
      const data = await response.json();
      setChatHistory(prev => [...prev, { question: inputMessage, answer: data.chat_response, timestamp: new Date().toISOString() }]);
      setInputMessage("");  // Clear input field after sending
    } else {
      console.error("Failed to send message");
    }
  };

  return (
    <div className="UploadPage">
      <div className="Sidebar">
        <FileUpload onUpload={handleUpload} uploadedFiles={pdfFiles} token={authContext?.authToken} />
      </div>
      <div className="MainContent">
        {chatHistory.map((msg, index) => (
          <div key={index} className="Message">
            <p className="Question">Q: {msg.question}</p>
            <p className="Answer">A: {msg.answer}</p>
          </div>
        ))}
        <div className="ChatInput">
          <input
            type="text"
            placeholder="Ask a question..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default PDFChatPage;


