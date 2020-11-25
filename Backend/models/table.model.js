var mongoose = require("mongoose");

// creando la tabla de bases de datos
const TableSchema = new mongoose.Schema({
  title: String,
  expiration: String,
  belong: String,
});

module.exports = mongoose.model("Table", TableSchema)
