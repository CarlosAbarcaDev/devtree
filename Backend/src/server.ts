import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./router.ts";
import { connectDB } from "./config/db.ts";
import { corsConfig } from "./config/cors.ts";

connectDB();
const server = express();

// CORS

server.use(cors(corsConfig));

//forms
server.use(express.json());

server.use("/", router);

export default server;
