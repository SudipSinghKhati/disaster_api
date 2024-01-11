import express from "express";
import news from "./news";
const router = express.Router();

router.use("/", news);

export default router;