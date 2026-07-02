// Externall files
const express = require('express');
const app = express();
const path = require('path');
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
//

// Internal files
const mainRouter = require('./routes/index');
const messageRouter = require('./routes/new-message');
//


app.listen(4044, () => console.log('Server started on port 4044'))

app.use('/', mainRouter);

app.use('/new', messageRouter);