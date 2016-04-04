// Delete Files

var glob = require("glob");
var fs = require("fs");

// Find files


function deleteFiles(directory) {
	glob(directory + "/*!(.gitkeep)",function(err,files){
		// files.forEach(function(item,index,array){
		// 	console.log(item + " found");
		// });
		// Delete files
		files.forEach(function(item,index,array){
			var stats = fs.statSync(item);
			if (stats.isDirectory()) {
				console.log(item + " is directory");	
				fs.readdir(item, function (err, filesInDirectory) {
					if(filesInDirectory.length) {
						deleteFiles(item);
						deleteFiles(directory);
					} else {
						fs.rmdir(item, function (err) {
							if (err) {
								// console.log(err);
							} else {
								console.log(item + "directory removed")	
							}
							
						})
					}
				})
			} else {
				fs.unlink(item, function(err){
					if (err) {
						console.log(err)	
					} else {
						console.log(item + " deleted");	
					}
				});	
			}
		});
	});
}

deleteFiles("receipts");