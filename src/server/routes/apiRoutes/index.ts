import express from "express";
import authorsRouter from "./authors";
import blogsRouter from "./blogs";
import tagsRouter from "./tags";
import blogTagsRouter from "./blogTags";
import contactRouter from "./contact";
import donateRouter from "./donate";
import loginRouter from "./login";
import { tokenCheck } from "../../middlewares/tokencheck";

const apiRouter = express.Router();

apiRouter.use("/authors", authorsRouter);
apiRouter.use("/blogs", tokenCheck, blogsRouter);
// apiRouter.use("/blogs", blogsRouter);
apiRouter.use("/tags", tagsRouter);
apiRouter.use("/blogtags", blogTagsRouter);
apiRouter.use("/contact", contactRouter);
apiRouter.use("/donate", donateRouter);
apiRouter.use("/login", loginRouter);

export default apiRouter;
