interface Window {
  mainProcess: {
    onSubmit: (filename: string, text: string, password: string) => void;
  };
}
