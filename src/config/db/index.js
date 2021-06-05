const mongoose = require('mongoose');

// phai cos async moi chay duoc
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://vanminh3:1234@blog.cggar.mongodb.net/blog?retryWrites=true&w=majority', {
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