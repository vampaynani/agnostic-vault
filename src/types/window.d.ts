type onDirectoryListCallback = (list: string[]) => void;
type onFileDecryptCallback = (decryptedData: string) => void;

interface Window {
  electronApi: {
    onSubmit: (text: string) => void;
    onDrop: (filePath: string) => void;
    onDirectoryList: (onDirectoryListCallback) => void;
    listFiles: () => void;
    selectFilename: (filename: string) => void;
    onFileDecrypt: (onFileDecryptCallback) => void;
    copyToClipboard: (data: string) => void;
  };
}
