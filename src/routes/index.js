const newRouter = require('../routes/news')
const newsite = require('../routes/site')
const newKH = require('../routes/kh')
const esp = require('../routes/esp')
const socket = require('../routes/Socket')
 function route(app) {
      // app.use('/esp32y', esp);
      app.use('/socket', socket);
       app.use('/esp32', esp);
       app.use('/khoa-hoc', newKH);
       app.use('/new', newRouter);
       app.use('/home', newsite);
       app.use('/', newsite)


}
module.exports = route