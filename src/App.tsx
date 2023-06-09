import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

enum Selection {
  Encrypt,
  Decrypt,
}

function App() {
  const [state, setState] = useState(Selection.Encrypt);
  return (
    <main className="App">
      <div>
        <button onClick={() => setState(Selection.Encrypt)}>Encrypt</button>
        <button onClick={() => setState(Selection.Decrypt)}>Decrypt</button>
      </div>
      {state === Selection.Encrypt && <Form />}
      {state === Selection.Decrypt && (
        <div id="drag-file" className="container">
          <div className="border">
            <p>Arrastra tu archivo aquí</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
