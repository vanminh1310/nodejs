const {  mongooseToObject} = require('../../util/mongoose')
const Blog = require('../model/nd')
class Khoahoc{
    show(req, res,next){
        // res.render('new');
        Blog.findOne({slug: req.params.slug})
        .then(blog=>{
            res.render('khoahoc',
              {
                blog:mongooseToObject(blog)
              })
            })
    
        .catch(next)
    }

}

// khoi tao 
module.exports = new Khoahoc;