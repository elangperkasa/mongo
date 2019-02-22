var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://node2:js2@localhost:27017";

MongoClient.connect(url,  { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("erwin");
  dbo.collection("peserta").find({nama:'erwin'}, { projection: { _id:0, nama:1} }).toArray(function(err, result) {

    if (err) throw err;
    console.log(result);
    db.close();
  });
});
