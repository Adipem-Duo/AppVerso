const app = require('express')();
const env = require('.env');
app.get('/', (req, res) => res.send("Hello World"))

app.listen(port.dev.port)