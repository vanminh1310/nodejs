const { mutipleMongooseToObject } = require('../../util/mongoose')
const Blog = require('../model/nd')
const Esp = require('../model/esp')

 class espContronller{

 home(req, res,next){
        // ham lay du lieu tu database
           Esp.find().sort({'_id':-1}).limit(1) // lấy dữ liệu mới nhâts 
            // .then(blog=>res.render('home',{blog}))
            .then(esp=> {
              
              res.render('esp32',
              {
                esp:mutipleMongooseToObject(esp),
              }
              )
            })
            .catch(next)
            // 
    }
    posty(req, res,next){
         // res.send('welcome, ' + req.body.username)
        res.json(req.body)
        const esp32 = new Esp (req.body)
        esp32.save()
        console.log(esp32) 
    }

    // 
 
}

// khoi tao 
module.exports = new espContronller;