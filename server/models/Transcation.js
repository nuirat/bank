const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transcationSchema = new Schema({
    vendor: String, 
    category: String,
    amount: Number
})

const Transcation = mongoose.model("transaction", transcationSchema)
Transcation.findByIdAndDelete
module.exports = Transcation