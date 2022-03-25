import React from 'react';
import ReactDOM from 'react-dom';
import Router from './page/router';



function App() {
  return (
    <Router />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));