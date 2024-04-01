import { Query } from "../connections";
import { IAuthors, IBaseAuthors } from "../../types";

const getAll = () => Query<IAuthors[]>("SELECT * FROM Authors");
const getOne = (id: number) => Query<IAuthors[]>("SELECT * FROM Authors WHERE id=?", [id]);
const create = (newAuthors: IBaseAuthors) => Query("INSERT INTO Authors SET ?", [newAuthors]);
const update = (updatedAuthors: IBaseAuthors, id: number) => Query("UPDATE Authors SET ? WHERE id=?", [updatedAuthors, id]);
const destroy = (id: number) => Query("DELETE FROM Authors WHERE id=?", [id]);

export default {
	getAll,
	getOne,
	create,
	update,
	destroy,
};
