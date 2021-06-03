const path = require("path");
const morgan = require("morgan");
const express = require("express"); // thu vien
const exphbs = require("express-handlebars");
const app = express(); // nayf la 1 cai ham
const route = require("./routes");
const db = require('./config/db/index');
const { post } = require("./routes/news");
const port = 3000;


// connect to db
db.connect();

// dinh nghia route
app.use(express.static(path.join(__dirname, "public"))); // tao duong dan den thu muc public file tinh
// http logger
app.use(morgan("combined"));
// template logger
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
  })
); // sua lai duoi




app.use(
  express.urlencoded({
      extended: true,
  }),
);
app.use(express.json());

app.set("views", path.join(__dirname, "resources","views"));
app.set("view engine", "hbs");
console.log(__dirname);

// route init

route(app);

app.listen(process.env.PORT||port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
