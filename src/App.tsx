import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import { Selection } from "./types/constants";
import Navbar from "./Navbar";

function App() {
  const [state, setState] = useState(Selection.Encrypt);
  return (
    <main className="h-screen w-screen bg-blue-700 overflow-hidden grid grid-rows-[40px_1fr]">
      <Navbar updateSelection={setState} />
      {state === Selection.Encrypt && <Form />}
      {state === Selection.Decrypt && <List />}
    </main>
  );
}

export default App;
