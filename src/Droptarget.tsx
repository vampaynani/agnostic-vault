import React, { DragEvent } from "react";

interface FileWithPath extends File {
  path: string;
}

function onFileDragOver(e: DragEvent<HTMLDivElement>) {
  e.stopPropagation();
  e.preventDefault();
}

function onFileDrop(e: DragEvent<HTMLDivElement>) {
  e.preventDefault();
  e.stopPropagation();
  const file = e.dataTransfer.files[0] as FileWithPath;
  window.electronApi.onDrop(file.path);
}

function Droptarget() {
  return (
    <div
      id="drag-file"
      className="h-[calc(100%-60px)] m-2 flex flex-col justify-center items-center border-4 border-blue-950 border-dashed"
      onDragOver={onFileDragOver}
      onDrop={onFileDrop}
    >
      <label
        htmlFor="dropper"
        className="block w-3/4 rounded-md py-2 mt-2 text-center bg-slate-800 text-stone-400"
      >
        Abre tu archivo
      </label>
      <input id="dropper" type="file" className="hidden" />
      <p>o</p>
      <p>Arrástralo aquí</p>
    </div>
  );
}
export default Droptarget;
