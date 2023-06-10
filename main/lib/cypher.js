const CryptoJS = require("crypto-js");

module.exports = {
  textToHex: function (text, password) {
    const encrypted = CryptoJS.AES.encrypt(text, password).toString();
    const base64 = CryptoJS.enc.Base64.parse(encrypted);
    return base64.toString(CryptoJS.enc.Hex);
  },
  hexToText: function (hex, password) {
    const parsedEncrypted = CryptoJS.enc.Hex.parse(hex);
    const parsedBase64 = parsedEncrypted.toString(CryptoJS.enc.Base64);
    return CryptoJS.AES.decrypt(parsedBase64, password).toString(
      CryptoJS.enc.Utf8
    );
  },
};
