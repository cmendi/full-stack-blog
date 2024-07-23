import * as jwt from "jsonwebtoken";
import express from "express";
import db from "../../db";
import config from "../../config";
import { compareHash } from "../../utils/passwords";

const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	try {
		const [authorFound] = await db.authors.find("email", email);
		if (authorFound && compareHash(password, authorFound.password)) {
			const token = jwt.sign({ authorid: authorFound.id, email: authorFound.email }, config.jwt.secret, { expiresIn: "15d" });
			return res.json(token);
		}
		res.status(401).json({ message: "Invalid email or password!" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "fix your code, login isnt working!" });
	}
});

export default loginRouter;
