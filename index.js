const path = require('path')
const morgan = require('morgan')
const express = require('express') // thu vien
const exphbs  = require('express-handlebars');
const app = express() // nayf la 1 cai ham 
const port = 3000 
// dinh nghia route 
app.use(express.static(path.join(__dirname, 'public'))) // tao duong dan den thu muc public file tinh
// http logger
app.use(morgan('combined'))
// template logger
app.engine('hbs', exphbs({
  extname: '.hbs'
})); // sua lai duoi


app.set('views',path.join(__dirname,'resources/views'))
app.set('view engine', 'hbs');
console.log(__dirname)
// 
app.get('/', (req, res) => {
  res.render('home');
  //res.send('Hello Van Minh')
})
app.get('/link', (req, res) => {
  res.render('new'); // goi ra 1 cai hbs moi
  //res.send('Hello Van Minh')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})