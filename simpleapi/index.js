const appName = `simpleapi_`;
console.log('running app', appName);

const express = require('express');
const request = require('request');
const app = express();
const client = require('prom-client');

const collectDefaultMetrics = client.collectDefaultMetrics;

// Probe every 5th second.
collectDefaultMetrics({ prefix: 'simpleapi_' });

const counter = new client.Counter({
  name: `${appName}user_requests`,
  help: 'get /user request '
});

const counter404 = new client.Counter({
  name: `${appName}404_requests`,
  help: '404 request '
});


app.get('/user', (req, res) => {
	request({
		method: 'GET',
		url: 'http://minikube-infraservice/verify',
	}, (err, response, body) => {
		if (err) {
			console.log(err);
			res.status(500).send('error');
			return;
		}

		counter.inc(); 
		res.status(200).send('user got from infraservice ' + body);	
	});
});

app.get('/metrics', (req, res) => {
	res.set('Content-Type', client.register.contentType);
	res.end(client.register.metrics());
});

app.use((req, res) => {
 	res.writeHead(404);
 	counter404.inc(); 
    res.end('Page not found');
});

app.set('port', 80);

app.listen(app.get('port'), function() {
    console.log('simpleapi: Running on port ', app.get('port'));
});

