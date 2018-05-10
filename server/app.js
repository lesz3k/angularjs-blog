const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const url = 'mongodb://localhost/blogTestDb'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        console.log('connected successfully');
    });
})

app.listen(3000, () => console.log('blog server running on port 3000!'))
