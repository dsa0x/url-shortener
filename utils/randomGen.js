const crypto = require("crypto");

const generateRandomString = () => {
  const randomlength = Math.ceil(Math.random() * 6 + 6);
  return crypto
    .randomBytes((randomlength * 3) / 4)
    .slice(0, randomlength)
    .toString("base64")
    .replace(/\+/g, "0")
    .replace(/\//g, "0");
};

module.exports = generateRandomString;
// console.log(generateRandomString());
