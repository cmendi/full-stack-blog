import { Query } from "../connections";
import { IBlogs, IBaseBlogs } from "../../types";

const getAll = () => Query<IBlogs[]>("SELECT * FROM Blogs");
const getOne = (id: number) => Query<IBlogs[]>("SELECT * FROM Blogs WHERE id=?", [id]);
const create = (newBlog: IBaseBlogs) => Query("INSERT INTO Blogs SET ?", [newBlog]);
const update = (updatedBlog: IBaseBlogs, id: number) => Query("UPDATE Blogs SET ? WHERE id=?", [updatedBlog, id]);
const destroy = (id: number) => Query("DELETE FROM Blogs WHERE id=?", [id]);

export default {
	getAll,
	getOne,
	create,
	update,
	destroy,
};
