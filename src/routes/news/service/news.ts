import report from "../../../db/db";
import { responder } from "../../../middelware/responder";
const serverError = "Internal server error";
const getAllNews = async (req: any, res: any, next: any) => {
  try {
    const getAllNews = await report("news").select("*");
    if (!getAllNews) {
      res.status(404).json(responder(false, "there are no news"));
    }
    res.status(200).json(responder(true, "All news", getAllNews));
  } catch (error) {
    next("error");
    res.status(500).json(serverError);
  }
};

const postNews = async (req: any, res: any, next: any) => {
  try {
    const { title, description } = req.body;
    const image = req.file.filename;
    if (!title) {
      res.status(404).json(responder(false, "Please insert title"));
    }
    if (!description) {
      res.status(404).json(responder(false, "Please insert description"));
    }
    if (!image) {
      res.status(404).json(responder(false, "Please put image"));
    }
    await report("news").insert({
      title,
      description,
      image,
    });
    res.status(202).json(responder(true, "News created sucessfully"));
  } catch (error) {
    next(error);
    res.status(500).json(serverError);
  }
};

const getNewsByID = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  const getByID = await report("news").where({ id }).first();
  if (!getByID) {
    res.status(404).json(responder(false, "news not found"));
  } else {
    res.status(200).json(responder(true, `News on id: ${id}`, getByID));
  }
};

const deleteNewsByID = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  const getByID = await report("news").where({ id }).delete();
  if (!getByID) {
    res.status(404).json(responder(false, "news not found"));
  } else {
    res
      .status(201)
      .json(responder(true, `News delete sucessfully on id: ${id}`));
  }
};

export = {
  getAllNews,
  postNews,
  getNewsByID,
  deleteNewsByID,
};
