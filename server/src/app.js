const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const planetsRouter = require("./routes/planets/planet.router");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(planetsRouter);

app.get("/", (req, resp) => {
  resp.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
