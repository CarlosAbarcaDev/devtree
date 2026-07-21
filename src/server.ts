import express from "express";
import "dotenv/config";
import router from "./router.ts";
import { connectDB } from "./config/db.ts";
const server = express();
connectDB();

//forms
server.use(express.json());

server.use("/", router);

export default server;
