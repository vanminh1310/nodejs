class creatContronller{

    index(req, res){
        res.render('creat');
    }
    postc(req, res,next){
       res.json(req.body)
       res.send(req.body)
       

   }
}

// khoi tao 
module.exports = new creatContronller;