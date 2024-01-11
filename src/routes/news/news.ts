import express from "express";
import upload from "../../middelware/upload";
import newsServices from "./service/news";

const router = express.Router();

router.get("/", newsServices.getAllNews);

router.post("/", upload.single("image"), newsServices.postNews);

router.get("/:id", newsServices.getNewsByID);

router.delete("/:id", newsServices.deleteNewsByID);

export default router;
