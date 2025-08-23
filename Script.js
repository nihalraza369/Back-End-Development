const { log } = require('console');
const fs = require('fs');


fs.writeFile('hey.txt','hello kese hoo',function(err){
    if (err) console.log(err);
    else console.log('File Created successfully');
})


fs.appendFile('hey.txt','\nI am fine',function(err){
    if (err) console.log(err);
    else console.log('File Updated successfully');
})


fs.rename('hey.txt','nihal.txt',function(err){
    if (err) console.log(err);
    else console.log('File Renamed successfully');
})

fs.copyFile('nihal.txt','copyfile/nihal_copy.txt',function(err){
    if (err) console.log(err.message);
    else console.log('File Copied successfully');
})




fs.unlink('nihal.txt',function(err){
    if (err) console.log(err);
    else console.log('File Deleted successfully');
})

fs.rmdir('copyfile',{recursive:true},function(err){
    if(err) console.log("done");
    else console.log("Error deleting directory");
})