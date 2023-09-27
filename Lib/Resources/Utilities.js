import dotenv from "dotenv";
import fs from "fs";
import util from "util";
import path from "path";

dotenv.config();

const PORT = process.env.PORT;
const SERVER_MSG = "Akane Discord Server's site";
const SUCESSFUL = 200;
const NOT_FOUND = 404;
const FORBIDEEN = 403;
const CRASH = 503;
const SUCESSFUL_MSG = "sucessful";
const NOT_FOUND_MSG = "not found";
const FORBIDEEN_MSG = "request forbidden";
const CRASH_MSG = "unexpected issue";
const print = (show) => console.log(show);
const printl = function (show) {
  const __dirname = path.resolve();
  const log_file = fs.createWriteStream(__dirname + "/debug.log", {
    flags: "w",
  });
  const log_stdout = process.stdout;

  console.log = function (d) {
    log_file.write(util.format(d) + "\n");
    log_stdout.write(util.format(d) + "\n");
  };

  console.log(show);
};
const safify = (val) => {
  if (!val) return "";
  else return val;
};
const is_float = (n) => {
  return Number(n) === n && n % 1 !== 0;
};

export {
  PORT,
  SERVER_MSG,
  SUCESSFUL,
  NOT_FOUND,
  FORBIDEEN,
  CRASH,
  SUCESSFUL_MSG,
  NOT_FOUND_MSG,
  FORBIDEEN_MSG,
  CRASH_MSG,
  print,
  printl,
  is_float,
  safify,
};
