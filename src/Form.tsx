import React, { SyntheticEvent } from "react";

function submitData(e: SyntheticEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;
  const formElements = form.elements as typeof form.elements & {
    filename: { value: string };
    text: { value: string };
    password: { value: string };
  };
  window.mainProcess.onSubmit(
    formElements.filename.value,
    formElements.text.value,
    formElements.password.value
  );
}

function Form() {
  return (
    <form onSubmit={submitData}>
      <label>File name</label>
      <input name="filename" type="text" />
      <label>Text to encrypt</label>
      <textarea name="text" cols={10} rows={5}></textarea>
      <label>Password</label>
      <input name="password" type="password" />
      <button>Encrypt Now</button>
    </form>
  );
}

export default Form;
