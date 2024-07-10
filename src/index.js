import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home/index.jsx';
import reportWebVitals from './reportWebVitals';

function Footer(){
  return <footer>footer</footer>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <header className="App-header">
      <h1>Liste des logements</h1>
    </header>

    <App />

    <Footer />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
