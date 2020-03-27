const express = require("express");
const generateRandomString = require("../utils/randomGen");
const checkUrlExists = require("../utils/checkUrlExists");
const router = express.Router();
const Url = require("../models/urls");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Url Shortener" });
});

/* Post Url */
router.post("/", async (req, res, next) => {
  const path = req.body.path;
  try {
    const isValidUrl = await checkUrlExists(path);
    if (!isValidUrl) {
      throw Error("Not a valid url");
    }
    const shortUrl = generateRandomString();
    const url = new Url({
      path,
      shortUrl
    });

    let ress = await url.save();
    console.log(ress);
    res.status(201).send(url);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get Url
router.get("/:link", async (req, res) => {
  const shortUrl = req.params.link;
  try {
    let { path: url } = await Url.findOne({ shortUrl: shortUrl });
    if (!url.startsWith("http")) url = `http://${url}`;
    res.redirect(url);
    // res.send(url);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

module.exports = router;
