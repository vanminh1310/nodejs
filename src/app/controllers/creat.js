const Blog = require('../model/nd')
class creatContronller{

    index(req, res){
        res.render('creat');
    }
    postc(req, res,next){
       res.json(req.body)
       const creat = new Blog(req.body)
       creat.save()
      res.redirect('/home')

   }
}

// khoi tao 
module.exports = new creatContronller;