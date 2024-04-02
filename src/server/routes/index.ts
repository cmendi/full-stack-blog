import express from "express";
import authorsRouter from "./authors";
import blogsRouter from "./blogs";
import tagsRouter from "./tags";

const indexRouter = express.Router();

indexRouter.use("/api/authors", authorsRouter);
indexRouter.use("/api/blogs", blogsRouter);
indexRouter.use("/api/tags", tagsRouter);

export default indexRouter;
