const fetch = require("node-fetch");

const checkUrlExists = async url => {
  try {
    if (!url.startsWith("http")) url = `http://${url}`;
    const response = await fetch(url, { method: "HEAD" });

    return true;
  } catch (err) {
    return false;
  }
};

module.exports = checkUrlExists;
