const path = require("path");
const morgan = require("morgan");
const express = require("express"); // thu vien
const exphbs = require("express-handlebars");
const app = express(); // nayf la 1 cai ham
const route = require("./routes");
const db = require('./config/db/index');
var server = require("http").createServer(app);
var methodOverride = require('method-override')
var io = require("socket.io")(server);



const {
  post
} = require("./routes/news");
const port = 3000;
var bodyParser = require('body-parser')
// connect to db
db.connect();

// dinh nghia route
app.use(express.static(path.join(__dirname, "/public"))); // tao duong dan den thu muc public file tinh
// http logger
app.use(morgan("combined"));
// 
app.use(methodOverride('_method'))
// template logger
app.engine(
  'hbs',
  exphbs({
      extname: '.hbs',
      helpers: {
          sum: (a, b) => a + b,
      },
  }),
);// sua lai duoi

// 

app.use(
  express.urlencoded({
      extended: true,
  }),
);
app.use(express.json());

app.set("views", path.join(__dirname, "resources", "views"));
app.set("view engine", "hbs");
console.log(__dirname);

// soket

// route init
route(app);


app.listen( port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// process.env.PORT ||