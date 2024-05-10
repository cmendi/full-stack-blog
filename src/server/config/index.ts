import dotenv from "dotenv";

dotenv.config();

const mysql = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_SCHEMA,
};

const mailgun = {
	apiKey: process.env.MAILGUN_KEY as string,
	domain: process.env.MAILGUN_DOMAIN as string,
	toEmail: process.env.MAILGUN_TO_EMAIL as string,
};

export default {
	mysql,
	mailgun,
};
