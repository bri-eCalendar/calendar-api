const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());
if (morgan) server.use(morgan("dev"));

// test route
server.get("/", (req, res) => res.status(200).json({ api: "is up" }));

module.exports = server;
