import express from "express";
import news from "../../db/db";
import { responder } from "../../middelware/responder";

const router = express.Router();
const serverError = "Internal server error";
router.get("/", async (req: any, res: any, next: any) => {
  try {
    const getAllNews = await news("news").select("*");
    if (!getAllNews) {
      res.status(404).json(responder(false, "there are no news"));
    }
    res.status(200).json(responder(true, "All news", getAllNews));
  } catch (error) {
    next("error");
    res.status(500).json(serverError);
  }
});


export default router;
