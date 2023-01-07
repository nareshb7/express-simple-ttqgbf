const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hiii Express');
});

/*
Font Awesome Icns link
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"> 
*/

app.listen(3010, () => console.log('server is running....'));
console.log('hii hello');
