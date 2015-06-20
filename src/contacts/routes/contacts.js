var express = require('express');
var router = express.Router();
var objects = new Array();
/* GET contacts */
router.get('/:id', function (req, res, next) {
    res.send(objects[+(req.params.id)]);
});
router.get('/msg/:id', function (req, res, next) {
    console.log(req.body);
    res.send(objects[+(req.params.id)].messages);
});

router.post('/', function (req, res, next) {
    objects.push(req.body);
    var fs = require('fs');
    var id = objects.length-1;
    fs.writeFile("../../data/"+id+"-Contact.json", JSON.stringify(req.body), function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("The file was saved!");
        }
    });
    res.send(id+"");
});

router.put('/:id', function (req, res, next) {
  var id = req.params.id;
  var obj1 = objects[+(id)];
  var obj2 = req.body;
 
  var fs = require('fs');
  for (var i in obj2) {
      obj1[i] = obj2[i];
  }
  objects[+(id)] = obj1;

  var obj3 = JSON.parse(fs.readFileSync("../../data/"+id+"-Contact.json"));
  console.log(obj3);
  for (var i in obj2) {
      obj3[i] = obj2[i];
  }
  fs.writeFile("../../data/" + id + "-Contact.json", JSON.stringify(obj3), function (err) {
      if (err) {
          console.log(err);
      }
      else {
          console.log("The file was saved!");
      }
  });
  res.send(obj1);

});

router.put('/msg/:id', function (req, res, next) {
    var id = req.params.id;
    var fs = require('fs');
    objects[+(req.params.id)].messages.push(req.body.messages);
    var obj3 = JSON.parse(fs.readFileSync("../../data/" + id + "-Contact.json"));
    obj3.messages.push(req.body.messages);
    fs.writeFile("../../data/" + id + "-Contact.json", JSON.stringify(obj3), function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("The file was saved!");
        }
    });
    res.send(objects[+(req.params.id)]);
});
module.exports = router;
