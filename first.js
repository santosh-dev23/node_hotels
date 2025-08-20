const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('welcome to our hotel...');
});


const personRoutes = require('./routes/personRoutes'); //import the router file . 
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person', personRoutes); //use the routers
app.use('/menu', menuItemRoutes);

app.listen(3000, () => {
    console.log('listening on port 3000');
});
