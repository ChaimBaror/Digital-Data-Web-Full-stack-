const express = require('express');
const app = express()
const port = process.env.PORT || 3001
const user = require("./users");
const bodyParser = require('body-parser'); 

var cors = require('cors');

// parse application/x-www-form-urlencoded

app.use(cors())
app.get('/', (req, res) => {
    res.status(200).json({
        message: "hi server express here"
    })
})
app.use(bodyParser.json())

app.use(user.ROUTE_PATH, user.route)

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})




