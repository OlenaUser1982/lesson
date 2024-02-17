const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get Books");
});
router.get("/1", (req, res) => {
  res.send("Get Book 1");
});
router.post("/", (req, res) => {
  res.send("Create Book 1");
});
router.put("/", (req, res) => {
  res.send("Update Book");
});
router.delete("/1", (req, res) => {
  res.send("Delete Book 1");
});
module.exports = router;
