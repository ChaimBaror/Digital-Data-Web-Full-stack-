const express = require('express');
const app = express()
const port = process.env.PORT || 3001
const user = require("./users");
var cors = require('cors');


app.use(cors())
app.get('/', (req, res) => {
    res.status(200).json({
        message: "hi chaim here"
    })
})
app.use(user.ROUTE_PATH, user.route)

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})




