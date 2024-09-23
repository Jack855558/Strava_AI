import React, { useState } from 'react';
import './App.css'; // Ensure your CSS is imported

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');



  const handleAuthClick = () => {
    // Redirect to Strava authentication URL
    window.location.href = 'https://www.strava.com/oauth/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=YOUR_REDIRECT_URI&scope=read';
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setResponse('Sample Response')
    return
  }

  const handleChange = (e) => {
    setPrompt(e.target.value)
    console.log(prompt)
  }

  return (
    <div className="app-container">
      <div className="auth-container">
        <button className="auth-button" onClick={handleAuthClick}>
          Authenticate with Strava
        </button>
      </div>
      <div className="app-header">
        <h1>Generate Text and Authenticate with Strava</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <textarea
            className="input-prompt"
            value={prompt}
            onChange={handleChange}
            placeholder="Enter your prompt"
          />
          <button type="submit" className="submit-button">Generate</button>
        </form>
        <div className="response-container">
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      </div>
    </div>
  );
}

export default App;