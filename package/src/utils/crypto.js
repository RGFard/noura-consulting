import CryptoJS from "crypto-js";

export const encrypt = (phrase) => {
    return CryptoJS.AES.encrypt(
        phrase,
        process.env.SECRET_PHRASE
    ).toString();
};

export const decrypt = (encryptedPhrase) => {
    encryptedPhrase = encryptedPhrase + "";
    const secretPhrase = process.env.SECRET_PHRASE + "";
    var bytes = CryptoJS.AES.decrypt(encryptedPhrase, secretPhrase);
    var originalPhrase = bytes.toString(CryptoJS.enc.Utf8);
    return originalPhrase;
};