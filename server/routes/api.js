const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
const Transaction = require("../models/Transcation");

router.get("/transactions", function (req, res) {
  Transaction.find({}, function (error, transactions) {
    res.send(transactions);
  });
});

router.post("/transaction", function (req, res) {
  console.log(req.body);
  const transaction = new Transaction({
    amount: req.body.amount,
    vendor: req.body.vendor,
    category: req.body.category,
  });
  transaction.save();
  res.end()
});
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})
router.delete("/transaction/:id", function (req, res) {
 
  Transaction.findByIdAndDelete(req.params.id,(error,docs)=>console.log(error))
  res.end()
});

module.exports = router;
