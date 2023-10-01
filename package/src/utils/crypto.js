import CryptoJS from "crypto-js";

export const encrypt = (phrase) => {
    return CryptoJS.AES.encrypt(
        phrase,
        process.env.SECRET_PHRASE
    ).toString();
};

export const decrypt = (encryptedPhrase) => {
    var bytes = CryptoJS.AES.decrypt(encryptedPhrase, process.env.SECRET_PHRASE);
    var bytes = CryptoJS.AES.decrypt(encryptedPhrase, "This is my very secure secret key Aramaic5297");
    var originalPhrase = bytes.toString(CryptoJS.enc.Utf8);
    return originalPhrase;
};