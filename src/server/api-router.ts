import express from "express";

const router = express.Router();

import testData from "../local.contests.json";

router.get("/contests", (req, res) => {
  // get data from Mongodb
  res.send({ contests: testData });
});

export default router;
