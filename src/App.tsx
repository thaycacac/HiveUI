import React from 'react';
import Button from './components/button'
import Alert from './components/alert/index'
import Card from './components/card/index'
import './theme/index.scss'

function App() {
  return (
    <div className="App">
      <Button type="warning" plain>Danger</Button>
      <Alert type="success" title="Info Alert" description="This is description" center>x</Alert>
      {/* <Card
        header="Card name"
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, repudiandae expedita. Nemo dolores velit quo ipsam illum natus accusamus minus ab laudantium. Debitis libero iure veniam sequi quo eius alias.
      </Card> */}
    </div>
  );
}

export default App;
