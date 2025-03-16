import express, { Router, Request, Response } from "express";
import { contextMiddleware } from "@dvelop-sdk/express-utils";

const app = express();

app.use(contextMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
