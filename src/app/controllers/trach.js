const { mutipleMongooseToObject} = require('../../util/mongoose')
const Blog = require('../model/nd')
class trash{
    tracha(req, res,next){
        Blog.findDeleted({})
        .then((blog) =>
            res.render('list', {
                blog: mutipleMongooseToObject(blog),
            }),
        )
        .catch(next);
}
    }

  

// khoi tao 
module.exports = new trash;