const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/trussle/server', (req, res) => {
  const message = req.query.message;
  var numberArray = message.split(" ");
	// message conversion using fromCharcode counting from 65
	let response = numberArray.map((numgroup)=>{
			let num = parseInt(numgroup);
      // Loop around a divide by 27 loop until the number is less than 27
      while(num>=27){num = num/27;} 
			if (Number.isInteger(num)){return String.fromCharCode(num+64);}
      //return space for numbers not divisable by 27
      else return ' ';
		}); 
  // Send response
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ decoded: response }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);