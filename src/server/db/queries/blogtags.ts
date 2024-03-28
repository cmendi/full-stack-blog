import { Query } from "../connections";
import { IBlogTags } from "../../types";

const create = (newBlogTag: IBlogTags) => Query("INSERT INTO blogtags SET ?", [newBlogTag]);
const destroy = (blog_id: number) => Query("DELETE FROM blogtags WHERE blog_id=?", [blog_id]);

export default {
	create,
	destroy,
};
