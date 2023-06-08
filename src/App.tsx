import React, { useState } from "react";
import "./App.css";

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
      {state === Selection.Encrypt && (
        <div>
          <label>File name</label>
          <input id="filename-input" type="text" />
          <label>Text</label>
          <textarea cols={10} rows={5} id="text-input"></textarea>
          <label>Password</label>
          <input id="password-input" type="text" />
          <button>Encrypt Now</button>
        </div>
      )}
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
