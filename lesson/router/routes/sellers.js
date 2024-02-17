const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get Sellers");
});
router.get("/1", (req, res) => {
  res.send("Get Seller 1");
});
router.post("/", (req, res) => {
  res.send("Create Seller ");
});
router.put("/", (req, res) => {
  res.send("Update Seller 1");
});
router.delete("/1", (req, res) => {
  res.send("Delete Seller 1");
});
module.exports = router;
