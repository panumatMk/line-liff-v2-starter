const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const myLiffId = '1655815900-mRY3N46r';

app.use(express.static('public'));

app.get('/send-id', function(req, res) {
    res.json({id: myLiffId});
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
