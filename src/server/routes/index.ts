import express from "express";
import authorsRouter from "./authors";
import blogsRouter from "./blogs";
import tagsRouter from "./tags";
import blogTagsRouter from "./blogTags";
import contactRouter from "./contact";

const indexRouter = express.Router();

indexRouter.use("/api/authors", authorsRouter);
indexRouter.use("/api/blogs", blogsRouter);
indexRouter.use("/api/tags", tagsRouter);
indexRouter.use("/api/blogtags", blogTagsRouter);
indexRouter.use("/api/contact", contactRouter);

export default indexRouter;
