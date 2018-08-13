const express = require('express');

const app = express();

app.get('/verify', (req, res) => {
	res.send('Verified V3 (new)');
});

app.use((req, res) => {
 	res.writeHead(404);
    res.end('Page not found');
});

app.set('port', 80);

app.listen(app.get('port'), function() {
    console.log('infraservice: Running on port ', app.get('port'));
});

