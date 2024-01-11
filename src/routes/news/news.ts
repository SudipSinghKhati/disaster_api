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

router.post("/", async (req: any, res: any, next: any) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      res.status(404).json(responder(false, "Please insert title"));
    }
    if (!description) {
      res.status(404).json(responder(false, "Please insert description"));
    }
    await news("news").insert({
      title,
      description,
    });
    res.status(202).json(responder(true, "News created sucessfully"));
  } catch (error) {}
});

router.get("/:id", async (req: any, res: any, next: any) => {
  const id = req.params.id;
  const getByID = await news("news").where({ id }).first();
  if (!getByID) {
    res.status(404).json(responder(false, "news not found"));
  } else {
    res.status(200).json(responder(true, `News on id: ${id}`, getByID));
  }
});
router.delete("/:id", async (req: any, res: any, next: any) => {
  const id = req.params.id;
  const getByID = await news("news").where({ id }).delete();
  if (!getByID) {
    res.status(404).json(responder(false, "news not found"));
  } else {
    res
      .status(201)
      .json(responder(true, `News delete sucessfully on id: ${id}`));
  }
});

export default router;
