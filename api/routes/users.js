var express = require('express');
var db = require('../sb');
var router = express.Router();

router.get('/:username', function (req, res, next) {
  const dbConnect = db.getDb();
  const userName = req.params.username;
  dbConnect
    .collection('usersList')
    .find({ userName })
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching listings!');
      } else {
        res.json(result);
      }
    });
});

router.post('/:username', function (req, res, next) {
  const dbConnect = db.getDb();
  const userName = req.params.username;
  const requestPayload = { ...req.body, userName };

  dbConnect.collection('usersList').insertOne(requestPayload, (err, result) => {
    if (err) {
      res.status(400).send('Error inserting matches!');
    } else {
      console.log(`Added a new match with id ${result.insertedId}`);
      res.status(201).send({ id: result.insertedId });
    }
  });
});

module.exports = router;
