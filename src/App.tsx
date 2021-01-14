import React from 'react';
import Button from './components/button'
// import Tooltip from './components/tooltip/tooltip';
import ElCol from './components/col/col'
import './theme/index.scss'

function App() {
  return (
    <div className="App">
      <Button type="warning" round >Danger</Button>
      {/* <Tooltip></Tooltip> */}
      <ElCol span={6}>
        <div className="grid-content bg-purple"></div>
      </ElCol>
    </div>
  );
}

export default App;
