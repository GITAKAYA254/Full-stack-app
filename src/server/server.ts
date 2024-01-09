import express from "express";

import os from "node:os";
import config, { HOST, PORT, SERVER_URL } from "./config";
import apiRouter from "./api-router";
console.log({ PORT });

const server = express();
// read files from the dist folder
server.use(express.static("dist"));
//  set templating engine
server.set("view engine", "ejs");

// Api end point
server.use("/api", apiRouter);

//middlewares
server.get("/", (req, res) => {
  res.render("index", {
    initialContent: "Loading....",
  });
});

// start server
server.listen(config.PORT, config.HOST, () => {
  console.info(
    `Server is running on ${SERVER_URL}`,
    `free available memory is: ${os.freemem() / 1024 / 1024}`
  );
});
