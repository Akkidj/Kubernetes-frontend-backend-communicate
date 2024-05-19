import React from 'react';
import './App.css';

function App() {
  const callApi = async () => {
    try {
      const response = await fetch('/api');
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert('Error calling API');
    }
  };

  return (
    <div className="App">
      <h1 className="welcome-text">Welcome to React App</h1>
      <button className="api-button" onClick={callApi}>Call API</button>
    </div>
  );
}

export default App;

