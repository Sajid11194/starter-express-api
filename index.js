const express = require('express')
const app = express()

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: [],
    removeHeaders: ['cookie', 'cookie2']
}).listen(process.env.PORT || 80, process.env.HOST || '0.0.0.0', function() {
    console.log('Running CORS Anywhere on ');
});

