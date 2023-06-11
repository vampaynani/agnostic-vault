import React, { useEffect, useState } from "react";

function List() {
  const [filenames, setFilenames] = useState([] as Array<string>);
  const [decryptedData, setDecryptedData] = useState("");
  useEffect(() => {
    window.electronApi.listFiles();

    window.electronApi.onDirectoryList((list: Array<string>) =>
      setFilenames(list)
    );

    window.electronApi.onFileDecrypt((decryptedData: string) =>
      setDecryptedData(decryptedData)
    );
  }, []);
  return (
    <>
      <ul className="overflow-auto">
        {filenames.map((filename) => (
          <li
            onClick={() => window.electronApi.selectFilename(filename)}
            className="border-b-2 border-b-white/30 p-2 bg-white/25 hover:bg-white/75 transition-colors"
            key={filename}
          >
            {filename}
          </li>
        ))}
      </ul>
      {decryptedData && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-white/50 backdrop-blur-sm p-4 overflow-auto flex justify-center items-center">
          <button
            onClick={() => setDecryptedData("")}
            className="absolute top-0 right-0 mt-4 mr-4 text-blue-600"
          >
            [<span className="hover:text-white transition-colors">X</span>]
          </button>
          <p className="font-bold">{decryptedData}</p>
        </div>
      )}
    </>
  );
}

export default List;
