const express = require("express");
const app = express()
const port = 6339
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`server start at localhost:${port}`)
})
app.get('/', (req, res) => {
    res.render("index")
})