const express = require("express");
const app = express();

const peopleRouter = require('./routes/peopleRouter')

app.use('/api/people', peopleRouter)

app.listen(8080, () => {
    console.log('Server is listening on Port 8080...')
})