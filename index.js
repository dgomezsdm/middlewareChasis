const express = require('express');
const cors = require('cors');
const chassisRoute = require('./routes/azure');

const app = express();

app.use(cors());


// app.get('/chassis', function (req, res) {
//   console.log('mm');
//   res.send('Saludos desde express');
// });
app.use('/chassis',chassisRoute)

// app.get('/chasis', (req,res)=>{

//   console.log('hola');
//   res.json(["hol","Asdsad"]);
// })
app.listen(3000, () => console.log('Seerve up'));