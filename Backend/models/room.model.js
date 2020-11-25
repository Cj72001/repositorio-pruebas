var mongoose = require("mongoose");

// creando la tabla de bases de datos
const RoomSchema = new mongoose.Schema({
  title: String,
  expiration: String,
});

module.exports = mongoose.model("Rooms", RoomSchema)

