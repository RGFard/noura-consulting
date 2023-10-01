import CryptoJS from "crypto-js";

export const encrypt = (phrase) => {
    return CryptoJS.AES.encrypt(phrase, process.env.GATSBY_SECRET_PHRASE);
};

export const decrypt = (encryptedPhrase) => {
    var bytes = CryptoJS.AES.decrypt(encryptedPhrase, process.env.GATSBY_SECRET_PHRASE);
    var originalPhrase = bytes.toString(CryptoJS.enc.Utf8);
    return originalPhrase;
};