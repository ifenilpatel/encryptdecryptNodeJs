require('dotenv').config();
const crypto = require("crypto");

let securityPassword = process.env.securityPassword;

module.exports = {

    encrypt: (text) => {
        var mykey = crypto.createCipher("aes-128-cbc", securityPassword);
        var mystr = mykey.update(text, "utf8", "hex");
        mystr += mykey.final("hex");
        return mystr;
    },

    decrypt: (text) => {
        var mykey = crypto.createDecipher("aes-128-cbc", securityPassword);
        var mystr = mykey.update(text, "hex", "utf8");
        mystr += mykey.final("utf8");
        return mystr;
    }

};