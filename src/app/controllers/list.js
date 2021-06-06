const { mutipleMongooseToObject } = require('../../util/mongoose')
const {   mongooseToObject } = require('../../util/mongoose')
const Blog = require('../model/nd')
class homeContronller{

    home(req, res,next){
        
        // ham lay du lieu tu database
           Blog.find({})
            // .then(blog=>res.render('home',{blog}))
            .then(blog => {
             // blog = blog.map(blog=>blog.toObject())
              res.render('list',
              {
                blog:mutipleMongooseToObject(blog)
              })
            })
            .catch(next)
 

       // res.render('home');
    }

    edit(req, res,next){
        
        // ham lay du lieu tu database
           Blog.findById(req.params.id) 
            // .then(blog=>res.render('home',{blog}))
            .then(blog => {
             // blog = blog.map(blog=>blog.toObject())
              res.render('edit',
              {
                blog:mongooseToObject(blog)
              })
            })
            .catch(next)
 

       // res.render('home');
    }

    puts(req, res,next){

      
        
      Blog.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/list'))
      .catch(next);
  }


   
}

// khoi tao 
module.exports = new homeContronller;