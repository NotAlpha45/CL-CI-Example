const express = require("express");

app = express();

const PORT = process.env.PORT | 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello World");
});

app.get("/iut", (req, res) => {
    res.status(200);
    res.send("In IUT CGPA Matters");
})

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server running on port ${PORT}`);
  }
});
