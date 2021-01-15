import React from 'react';
import Button from './components/button'
// import Tooltip from './components/tooltip/tooltip';
import Col from './components/col/col'
import Row from './components/row/row'
import './theme/index.scss'

function App() {
  return (
    <div className="App">
      <Button type="warning" round >Danger</Button>
      {/* <Tooltip></Tooltip> */}
     
      <Row justify="center"  >
      <Col lg={12} md={24} >
       col 1 
      </Col>
      <Col>
      col2
      </Col>
      </Row>
 
    </div>
  );
}

export default App;
