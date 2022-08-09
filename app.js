const express = require("express");
const app = express();

const peopleRouter = require("./routes/peopleRouter");

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json())

app.use("/api/people", peopleRouter);

app.listen(8080, () => {
  console.log("Server is listening on Port 8080...");
});
