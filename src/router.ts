import type { Express, Request, Response } from "express";
import { type DbService } from "./db";

const router = (app: Express, db: DbService) => {
  app.get("/", async (req, res) => {
    return res.send("Hello, world!");
  });

  app.get("/get/all", async (req, res) => {
    return res.send(db.getAll());
  });

  app.get("/get", async (req: Request, res: Response) => {
    try {
      const key = req.query.key;
      if (!key || typeof key !== "string") {
        return res.status(400).send("Missing key");
      }
      const value = db.getPair(key);
      if (!value) return res.status(404).send("Not found");
      return res.send(value);
    } catch (error) {
      return res.status(500).send("Internal server error");
    }
  });

  app.get("/set", async (req: Request, res: Response) => {
    try {
      const key = Object.keys(req.query)[0];
      if (!key || typeof key !== "string") {
        return res.status(400).send("Missing key");
      }
      const value = req.query[key];
      return res.send(db.setPair(key, value));
    } catch (error) {
      return res.status(500).send("Internal server error");
    }
  });
};

export default router;
