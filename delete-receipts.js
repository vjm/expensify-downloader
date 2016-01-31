// Delete Files

var glob = require("glob");
var fs = require("fs");

// Find files
glob("receipts/*.!(gitkeep)",function(err,files){
     files.forEach(function(item,index,array){
          console.log(item + " found");
     });
     // Delete files
     files.forEach(function(item,index,array){
          fs.unlink(item, function(err){
               console.log(item + " deleted");
          });
     });
});