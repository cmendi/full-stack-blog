import { Query } from "../connections";
import { IBlogTags } from "../../types";

const create = (newBlogTag: IBlogTags) => Query("INSERT INTO blogtags SET ?", [newBlogTag]);
const destroy = (column: "blog_id" | "tag_id", id: number) => Query("DELETE FROM blogtags WHERE ??=?", [column, id]);
const getAll = () => Query<IBlogTags[]>("SELECT * FROM blogtags");

export default {
	create,
	destroy,
	getAll,
};
