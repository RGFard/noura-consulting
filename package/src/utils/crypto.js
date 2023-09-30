import CryptoJS from "crypto-js";

export const encrypt = (phrase) => {
    return CryptoJS.AES.encrypt(
        phrase,
        process.env.SECRET_PHRASE
    ).toString();
};

export const decrypt = (encryptedPhrase) => {
    var bytes = CryptoJS.AES.decrypt(encryptedPhrase.toString(), process.env.SECRET_PHRASE.toString());
    var originalPhrase = bytes.toString(CryptoJS.enc.Utf8);
    return originalPhrase;
};