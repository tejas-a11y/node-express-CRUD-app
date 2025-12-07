const express = require('express'),
app = express();

const bodyParser = require('body-parser');
const db = require('./db');
employeeRoutes = require('./controllers/employee_controller');


//middleware
app.use(bodyParser.json());
app.use('/api/employees', employeeRoutes);
app.use((err,req,res,next) => {
    console.log(err);
    res.status(err.status || 500).send('something went wrong');
})


//first make successful db conncetion
//then start express server
db.query("SELECT 1")
.then(data => {
    console.log('db connection succeeded')
    app.listen(3000, () => console.log('server started at 3000'))
})
.catch(err=>console.log(`connection failed due to ${err}`))
