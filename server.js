let express = require('express');
let app = express();

app.use('/dist', express.static('dist'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.sendFile('index.html', {root: __dirname});
});

let port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(__dirname);
    console.log('Listening port: ' + port);
})

