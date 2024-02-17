const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get Movies");
});
router.get("/1", (req, res) => {
  res.get("Get Movie 1");
});
router.post("/", (req, res) => {
  res.get("Create Movie ");
});
router.put("/", (req, res) => {
  res.get("Update Movie 1");
});
router.delete("/1", (req, res) => {
  res.get("Delete Movie 1");
});

module.exports = router;
