const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ejs = require("ejs");
const crypto = require("crypto");
const fs = require("fs");
/* const dotenv = require('dotenv').config() */
const port = 4000;

app.set("view engine", "ejs");

mongoose.connect(
  "mongodb+srv://sivertamundsen:clouddev12@cluster0.mteiv.mongodb.net/IoT?retryWrites=true&w=majority"
);

/* const {publicKey, privateKey} = crypto.generateKeyPairSync("rsa", {modulusLenght: 2048}); //modulusLenght caused an error for some reason, idk how to fix it

const exportedPublicKeyBuffer = publicKey.export({type: 'pkcs1', format: 'pem'});
fs.writeFileSync('public.pem', exportedPublicKeyBuffer, {encoding: 'utf-8'});

const exportedPrivateKeyBuffer = privateKey.export({type: 'pkcs1', format: 'pem'});
fs.writeFileSync('private.pem', exportedPrivateKeyBuffer, {encoding: 'utf-8'});

const test = "Hello this is a test, remove this later"; //remove this


const encryptedData = crypto.publicEncrypt(
    {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    },
    Buffer.from(test) // test = data vi vil encrypte
);

console.log(test);
console.log(encryptedData.toString("base64"));


const decryptedData = crypto.publicDecrypt(
    {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    },
    encryptedData
);

console.log(encryptedData.toString());

const signature = crypto.sign(
    "sha256", 
    Buffer.from(test), 
    {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING
    }
);

console.log(signature.toString("base64"));

const isVerified = crypto.verify(
    "sha256",
    Buffer.from(test),
    {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING
    },
    signature
);

console.log("signature verified ? ", isVerified);
 */

const iotSchema = {
  message: String,
};

const AoTMessage = mongoose.model("Alert", iotSchema);

app.get("/", (req, res) => {
    AoTMessage.find({}, function (err, alerts) {
    res.render("index", {
      alertList: alerts,
    });
  });
});

app.listen(process.env.PORT || port, function () {
  console.log("server running on port 4000!");
});
