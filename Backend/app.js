var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var debug = require("debug")("api:app");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var protectedRouter = require("./routes/protected");
var authRouter = require("./routes/auth");
var tableRouter = require('./routes/table')
var RoomRouter = require('./routes/room')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("open", () => {
  debug("Database connected");
});
db.on("error", () => {
  console.log("cannot connect to database");
  process.exit(1);
});

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use(authRouter);
app.use(tableRouter);
app.use(RoomRouter);
app.use("/users", usersRouter);
app.use("/protected", protectedRouter);

module.exports = app;
