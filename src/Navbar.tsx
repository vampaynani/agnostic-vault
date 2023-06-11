import React from "react";
import { Selection } from "./types/constants";

interface NavbarProps {
  updateSelection: (selection: Selection) => void;
}

function Navbar(props: NavbarProps) {
  return (
    <div className="bg-blue-600 flex justify-end">
      <button
        className="p-2 text-white transition-colors hover:bg-white/10"
        onClick={() => props.updateSelection(Selection.Encrypt)}
      >
        Encrypt Data
      </button>
      <button
        className="p-2 text-white transition-colors hover:bg-white/10"
        onClick={() => props.updateSelection(Selection.Decrypt)}
      >
        Decrypt File
      </button>
    </div>
  );
}

export default Navbar;
