// write for connection of mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
Schema.Types.Decimal128.prototype.toJSON = function() {
    return this.toString();
}
// create a schema
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
    