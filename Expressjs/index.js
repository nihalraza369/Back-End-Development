const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
    console.log('pehla Middleware function chalu hai');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World');
});
app.use((req, res, next) => {
    console.log('Dusra Middleware function chalu hai');
    next();
});

app.get('/about', function (req, res, next) {
    // Yahan error bhej rahe hain
    next(new Error('Something went wrong'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
