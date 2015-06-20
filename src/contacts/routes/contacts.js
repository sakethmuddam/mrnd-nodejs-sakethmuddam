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

router.post('/', function(req, res, next) {
    objects.push(req.body);
    res.send(objects.length - 1 + "");
});

router.put('/:id', function(req, res, next) {
  var obj1 = objects[+(req.params.id)];
  var obj2 = req.body;
  for (var i in obj2) {
      obj1[i] = obj2[i];
  }
  objects[+(req.params.id)] = obj1;
  res.send(obj1);

});

router.put('/msg/:id', function (req, res, next) {
    
    objects[+(req.params.id)].messages.push(req.body.messages);
    res.send(objects[+(req.params.id)]);
});
module.exports = router;
