const app = require('express')();
app.get('/', (req, res) => res.send("Hello AppVerso"));

app.listen(8080);