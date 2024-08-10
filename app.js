const express = require('express');
const path = require('path');  // Add this line
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Serve individual fraud informational pages
app.get('/fraud/parking-ticket-payment-fraud', (req, res) => {
    res.sendFile(__dirname + '/views/parking-ticket-payment-fraud.html');
});

app.get('/fraud/interac-email-fraud', (req, res) => {
    res.sendFile(__dirname + '/views/interac-email-fraud.html');
});

app.get('/fraud/investment-fraud', (req, res) => {
    res.sendFile(__dirname + '/views/investment-fraud.html');
});

app.get('/fraud/lottery-scams', (req, res) => {
    res.sendFile(__dirname + '/views/lottery-scams.html');
});

app.get('/fraud/identity-theft', (req, res) => {
    res.sendFile(__dirname + '/views/identity-theft.html');
});

app.get('/fraud/banking-scam', (req, res) => {
    res.sendFile(__dirname + '/views/banking-scam.html');
});

app.get('/fraud/online-shopping-scam', (req, res) => {
    res.sendFile(__dirname + '/views/online-shopping-scam.html');
});

app.get('/fraud/phishing-scam', (req, res) => {
    res.sendFile(__dirname + '/views/phishing-scam.html');
});

app.get('/fraud/pyramid-scheme', (req, res) => {
    res.sendFile(__dirname + '/views/pyramid-scheme.html');
});

// Default route for the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
