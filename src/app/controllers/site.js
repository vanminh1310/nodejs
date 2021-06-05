const { mutipleMongooseToObject } = require('../../util/mongoose')
const Blog = require('../model/nd')
class homeContronller{

    home(req, res,next){
        
        // ham lay du lieu tu database
           Blog.find({})
            // .then(blog=>res.render('home',{blog}))
            .then(blog => {
             // blog = blog.map(blog=>blog.toObject())
              res.render('home',
              {
                blog:mutipleMongooseToObject(blog)
              })
            })
            .catch(next)
 

       // res.render('home');
    }
}

// khoi tao 
module.exports = new homeContronller;