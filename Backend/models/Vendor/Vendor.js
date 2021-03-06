const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  aadharNo:String,
  PANNo:String,
  GSTNo:String,
  address:String,
  district:String,
  state:String,
  PIN:String,

  
});
VendorSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Vendor", VendorSchema);
