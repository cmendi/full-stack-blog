import express from "express";
import db from "../db";
import { IBlogTags } from "../types";

const blogTagsRouter = express.Router();

// Create blogtag
blogTagsRouter.post("/", async (req, res) => {
	const { blog_id, tag_id } = req.body;
	try {
		const newblogTag: IBlogTags = {
			blog_id,
			tag_id,
		};

		const blogTag = await db.blogtags.create(newblogTag);
		const blogTagId = blogTag.insertId;
		res.status(200).json({ message: `Successfully created blogtag!`, id: blogTagId });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Cannot create blogtag at this time" });
	}
});

//Delete blogtag

export default blogTagsRouter;
