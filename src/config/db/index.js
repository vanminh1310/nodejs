const mongoose = require('mongoose');

// phai cos async moi chay duoc
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Ket noi thanh cong")

    } catch (error) {

        console.log("Ket noi khong thanh cong")

    }
}

module.exports = {connect}