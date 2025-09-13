const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/send', (req, res) => {
    console.log(req.body);
    
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);
    res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});