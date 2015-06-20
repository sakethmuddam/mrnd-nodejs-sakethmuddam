 var contact = new Object();
contact.firstname = "jagan";
contact.lastname = "peri";
contact.phone = "23002300";
contact.anotherprop = "";
var id = 0;
    var fs = require('fs');
    fs.writeFile("data/"+id+"-Contact.json", "Thanq nikki", function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });