const {  mongooseToObject} = require('../../util/mongoose')
const Blog = require('../model/nd')
class Khoahoc{
    show(req, res,next){
        // res.render('new');
        Blog.findById(req.params.id)
        .then(blog=>{
            res.render('khoahoc',
              {
                //   lay mot truong
                blog:mongooseToObject(blog)
              })
            })
    
        .catch(next)
    }

}

// khoi tao 
module.exports = new Khoahoc;