var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// app.use((req,res,next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// app.get('/messages', (req,res) => {
//     res.json(messages);
// });

app.use(express.static(__dirname + '/dist'));

app.listen(port, () => {
    console.log('server up on ${port}');
});