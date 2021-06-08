const newRouter = require('./news')
const newsite = require('../routes/site')
const newKH = require('../routes/kh')
const esp = require('../routes/esp')
const socket = require('../routes/Socket')
const creat = require('../routes/Creat')
const list = require('./List')
 function route(app) {
      // app.use('/esp32y', esp);
      app.use('/list', list);
      app.use('/creat', creat);
      app.use('/socket', socket);
       app.use('/esp32', esp);
       app.use('/content', newKH);
       app.use('/about', newRouter);
       app.use('/home', newsite);
       app.use('/', newsite)


}
module.exports = route