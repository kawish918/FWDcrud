const express = require('express'); // express ka object
const cors = require('cors'); // cors ka object
const bodyParser = require('body-parser'); // body-parser ka object
const path = require('path'); // path ka object

const app = express(); // express ka object
const PORT = 5000; // port number

app.use(cors()); 
app.use(bodyParser.json()); 

const userRouter = require('./routes/users'); // user ka router

app.use('/api/users', userRouter); // user ka router use karna hai

app.listen(PORT, () => { // server ko sunna hai
    console.log(`Server is running on http://localhost:${PORT}`); // server ka message
}); // server ko sunna hai