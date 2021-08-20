// Modules
const express = require('express');
const path = require('path');

// App
const app = express();


// read-only variables
const PORT = process.env.PORT || 8080;
const PUBLIC = path.join(__dirname, 'public');

app.use(express.static(PUBLIC));

// Routes
app.use('/', require('./routes/landing'));

// 404 Redirection
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
});

app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Serving at port ${PORT}`);
    }
})
