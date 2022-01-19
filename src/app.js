const express           = require("express")
const router            = require('./routes/animal')
const app               = express()



app.use(express.json())       // converte body em JSON

app.use('/animals', router)  // define /animals como endpoint a todos metodos get, post etc.




module.exports = app