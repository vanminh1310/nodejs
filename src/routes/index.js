const newRouter = require('../routes/news')
const newsite = require('../routes/site')
const newKH = require('../routes/kh')

function route(app) {
       app.use('/khoa-hoc', newKH);
       app.use('/new', newRouter);
       app.use('/home', newsite);
       app.use('/', newsite)


}
module.exports = route