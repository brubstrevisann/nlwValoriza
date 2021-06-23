import express, { response } from "express";
import "reflect-metadata";
import { router } from "./routes";
// @types/express para poder acessar as tipagens
const app = express();

app.use(express.json())

app.use(router);

import "./database"

app.get("/test", (request, response) => {
  return response.send("oie, sou um get")
})

app.post("/testPost", (request, response) => {
  return response.send("oie, sou um post")
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"))