import express from "express";
import newsServices from "./service/news";
import upload from "../../middelware/upload";

const router = express.Router();

router.get("/", newsServices.getAllNews);

router.post("/", newsServices.postNews);

router.get("/:id", newsServices.getNewsByID);

router.delete("/:id", newsServices.deleteNewsByID);

export default router;
