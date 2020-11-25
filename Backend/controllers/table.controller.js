const Table = require("../models/table.model");

exports.createTable = async (req, res, next) => {
  const table = await Table.findOne({
    title: req.body.title,
    belong: req.body.belong,
  });

  if (!table) {
    const { title, expiration, belong } = req.body;
    const table = new Table({
      title,
      expiration,
      belong:belong,
    });

    table.save((err, newTable) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: "Fail to create a new table" });
      } else {
        res.send(newTable);
      }
    });
  } else {
    res.status(400).send({
      error: "Name is taken",
    });
  }
};

exports.getTables = async (req, res, next) => {
  console.log(req.params.belong);
  const tables = await Table.find({ belong: req.params.belong });
  if (!tables) {
    return;
  }

  return res.send(tables);
};
