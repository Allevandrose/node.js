const express = require ("express");
const routes = require('./routes/api');
const app = express();
app.use(routes);
app.listen(process.env.port || 4000, function(){
    console.log('Now Listening for requests on: http://localhost:4000');
});