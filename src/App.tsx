import React, { useState } from "react";
import Form from "./Form";

enum Selection {
  Encrypt,
  Decrypt,
}

function App() {
  const [state, setState] = useState(Selection.Encrypt);
  return (
    <main className="h-screen w-screen bg-blue-700">
      <div className="bg-blue-600 flex justify-end">
        <button
          className="p-2 text-white transition-colors hover:bg-white/10"
          onClick={() => setState(Selection.Encrypt)}
        >
          Encrypt
        </button>
        <button
          className="p-2 text-white transition-colors hover:bg-white/10"
          onClick={() => setState(Selection.Decrypt)}
        >
          Decrypt
        </button>
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
