import React, { SyntheticEvent, ReactNode } from "react";

function submitData(e: SyntheticEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;
  const formElements = form.elements as typeof form.elements & {
    text: { value: string };
  };
  window.mainProcess.onSubmit(formElements.text.value);
}

function Label({ children }: { children: ReactNode }) {
  return (
    <div className="mb-2">
      <label className="text-stone-100">{children}</label>
    </div>
  );
}

function Form() {
  return (
    <form className="p-4 space-y-6" onSubmit={submitData}>
      <div>
        <Label>Text to encrypt</Label>
        <textarea
          className="w-full rounded-md p-4"
          name="text"
          cols={10}
          rows={5}
        ></textarea>
      </div>
      <button className="block w-full rounded-md py-2 mt-2 text-center bg-slate-800 text-stone-400">
        Encrypt Now
      </button>
    </form>
  );
}

export default Form;
