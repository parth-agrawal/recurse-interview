import express from "express";
import router from "./src/router";
import dbService from "./src/db";

const app = express();

const db = dbService();
router(app, db);

app.listen({ port: 4000 }, () => {
  console.log("Server is running on port 4000");
});
