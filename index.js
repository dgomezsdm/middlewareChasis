require('dotenv').config();
const express = require('express');
const cors = require('cors');
const chassisRoute = require('./routes/azure');
const mailRoute = require('./routes/mail')

const app = express();
const PORT = process.env.PORT || 3001
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ extended: true, limit:'50mb' }));
app.use(cors());


// app.get('/chassis', function (req, res) {
//   console.log('mm');
//   res.send('Saludos desde express');
// });
app.use('/chassis',chassisRoute);
app.use('/mail',mailRoute);

// app.get('/chasis', (req,res)=>{

//   console.log('hola');
//   res.json(["hol","Asdsad"]);
// })
app.listen(PORT, () => console.log(`Server up on ${process.env.PORT}`));

