const { mutipleMongooseToObject } = require('../../util/mongoose')
const Blog = require('../model/nd')
class homeContronller{

    home(req, res,next){
        
        // ham lay du lieu tu database
           Blog.find().sort({'_id':-1}).limit(5)
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
// 
    cuocsong(req, res,next){
        
      // ham lay du lieu tu database
         Blog.find({slug:"cuocsong"})
          // .then(blog=>res.render('home',{blog}))
          .then(blog => {
           // blog = blog.map(blog=>blog.toObject())
            res.render('cuocsong',
            {
              blog:mutipleMongooseToObject(blog)
            })
          })
          .catch(next)
  }
  // 
  khampha(req, res,next){
        
    // ham lay du lieu tu database
       Blog.find({slug:"khampha"})
        // .then(blog=>res.render('home',{blog}))
        .then(blog => {
         // blog = blog.map(blog=>blog.toObject())
          res.render('khampha',
          {
            blog:mutipleMongooseToObject(blog)
          })
        })
        .catch(next)
}
// 
taymaytomo(req, res,next){
        
  // ham lay du lieu tu database
     Blog.find({slug:"taymaytomo"})
      // .then(blog=>res.render('home',{blog}))
      .then(blog => {
       // blog = blog.map(blog=>blog.toObject())
        res.render('taymaytomo',
        {
          blog:mutipleMongooseToObject(blog)
        })
      })
      .catch(next)
}

}

// khoi tao 
module.exports = new homeContronller;