import express from "express";
import morgan from "morgan";
import path from "path";
import { PORT, SERVER_MSG, SUCESSFUL, NOT_FOUND, NOT_FOUND_MSG, print, printl } from "./Lib/Resources/Utilities.js";

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(morgan("tiny"));
app.use("/static", express.static(path.join(__dirname, "/static")));
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  next();
});

app.listen(PORT, function () {
  print("running on http://localhost:" + PORT);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/pages/home.html"));
});

//? 404 HANDLER (always keep at the bottom)
app.get("*", function (req, res) {
  res.status(NOT_FOUND).json(NOT_FOUND);
});
//? 404 HANDLER
