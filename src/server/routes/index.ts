import express from "express";
import authorsRouter from "./authors";
import blogsRouter from "./blogs";

const indexRouter = express.Router();

indexRouter.use("/api/authors", authorsRouter);
indexRouter.use("/api/blogs", blogsRouter);

export default indexRouter;
