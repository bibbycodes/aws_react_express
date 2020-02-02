const express =  require('express');
const PORT = process.env.HTTP_PORT || 4001;
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req, res) => {
  res.send('This is an AWS tut');
});

app.get('/me', (req, res) => {
  res.json({
    name: 'Robert',
    colour: 'Black-ish'
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});