import React from 'react';
import Button from './components/button'
import Alert from './components/alert/index'
import './theme/index.scss'

function App() {
  return (
    <div className="App">
      <Button type="warning" plain>Danger</Button>
      <Alert type="success" >Success Alert</Alert>
    </div>
  );
}

export default App;
