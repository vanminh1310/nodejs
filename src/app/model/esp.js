const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const esp = new Schema({
    name: { type: String},
    sensor: { type: String },
    creatdate: { type: Date, default: Date.now },
    update: { type: Date, default: Date.now },
  });

//   them doi so dang sau de ket noi datatbase 
  module.exports= mongoose.model("esp",esp,"esp");