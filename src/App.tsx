import React from 'react';
import Button from './components/button'
import Tooltip from './components/tooltip/tooltip';
import Col from './components/col/col'
import './theme/index.scss'

function App() {
  return (
    <div className="App">
      <Button type="warning" round >Danger</Button>
      <Tooltip></Tooltip>
      <Col push={58656576587} >jasdfasdfadsfadsfasdfadsf
        <h2> hahahahahah</h2>
      </Col>
    </div>
  );
}

export default App;
