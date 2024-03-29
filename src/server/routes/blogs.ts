import express from "express";
import db from "../db";
import { IBaseBlogs } from "../types";

const blogsRouter = express.Router();

// Get all blogs
blogsRouter.get("/", async (req, res) => {
	try {
		const blogs = await db.blogs.getAll();
		res.json(blogs);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Cannot recieve all blogs" });
	}
});

// Get one blog
blogsRouter.get("/:id", async (req, res) => {
	const id = parseInt(req.params.id);

	try {
		const blog = await db.blogs.getOne(id);
		res.json(blog);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Cannot recieve blog with that id" });
	}
});

// Create blog
blogsRouter.post("/", async (req, res) => {
	const { title, content } = req.body;

	if (!title || typeof title !== "string" || title.length > 150) {
		return res.status(400).json({ message: "Title must be a string no longer than 150 characters" });
	}

	if (typeof content !== "string") {
		return res.status(400).json({ message: "Content must be of type string" });
	}

	try {
		const newBlog: IBaseBlogs = {
			title,
			content,
			author_id: 1,
		};

		const blog = await db.blogs.create(newBlog);
		const blog_id = blog.insertId;

		res.status(201).json({ message: "Successfully created blog!", id: blog_id });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Cannot create blog at this time" });
	}
});

//Delete blog

export default blogsRouter;
