const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blog = new Schema({
    title: { type: String},
    nd: { type: String },
    img: { type: String },
    slug: { type: String },
    author: { type: String },
    content: { type: String },
    creatdate: { type: Date, default: Date.now },
    update: { type: Date, default: Date.now },
  
  });

//   them doi so dang sau de ket noi datatbase 
  module.exports= mongoose.model("blog", blog,"blog");