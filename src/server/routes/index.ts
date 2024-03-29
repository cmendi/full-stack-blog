import express from "express";
import authorsRouter from "./authors";

const indexRouter = express.Router();

indexRouter.use("/api/authors", authorsRouter);

export default indexRouter;
