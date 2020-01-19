const app = require('express')();
const PORT = process.env.PORT || 5000
app.get('/', (req, res) => res.send("Hello AppVerso"));

app.listen(PORT, () => console.log(`Listening oon ${PORT}`));