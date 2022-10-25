require('dotenv').config();
const express = require('express');
const cors = require('cors');
const chassisRoute = require('./routes/azure');

const app = express();
const PORT = process.env.PORT || 3001
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
app.listen(PORT, () => console.log(`Server up on2 ${process.env.PORT}`));
app.timeout = 900000;
