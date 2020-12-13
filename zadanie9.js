var express = require('express');
var app = express();
const os = require('os');
const posr = 3000;
app.get('/', function(req, res){
    res.send('Hello world');
    if(os.hostname()){
        var hostname = os.hostname();
        console.log("Hostnme" + "system is" + String(hostname));
        console.log("Architekture " + os.arch());
        console.log("Twój system " + os.cpus());
    }
});
app.listen(port, function() {
    console.log('Wczystywanie strony');
})