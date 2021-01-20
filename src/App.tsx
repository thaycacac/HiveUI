import React from "react";
import Button from "./components/button";
import ElCol from "./components/col/col";
import Row from "./components/row/row";
import Tooltip from "./components/tooltip/tooltip";
import "./theme/index.scss";

function App() {
  return (
    <div className="App">
      <Row justify="center" aligh="middle">
        <ElCol span={6}>
          <div className="grid-content bg-purple">col-1</div>
        </ElCol>
        <ElCol span={6}>
          <div className="grid-content bg-purple">col-2</div>
        </ElCol>
        <ElCol span={6}>
          <div className="grid-content bg-purple">col-3</div>
        </ElCol>
        <ElCol span={6}>
          <div className="grid-content bg-purple">col-4</div>
        </ElCol>
      </Row>

      <Tooltip
        style={{ marginTop: "100px", marginLeft: "100px" }}
        direction="right"
        content="lalaland hahaha hihihi"
      >
        <Button type="warning" round>
          Danger
        </Button>
      </Tooltip>
    </div>
  );
}

export default App;
