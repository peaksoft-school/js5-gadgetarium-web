import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

function App() {
  return (
    <div>
      <Buttons>button</Buttons>
    </div>
  );
}

export default App;

const Buttons = styled(Button)({
  color: "red",
  backgroundColor: "yellow",
});
