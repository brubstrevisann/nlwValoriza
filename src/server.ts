import express, { Request, Response, NextFunction } from "express";
import "reflect-metadata";
import "express-async-errors";
import "./database"
import { router } from "./routes";

// @types/express para poder acessar as tipagens
const app = express();

// habilia o uso de json nas requests
app.use(express.json())

// habilita as rotas
app.use(router);

//midleware de error
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error"
    })

  });


// app.get("/test", (request, response) => {
//   return response.send("oie, sou um get")
// })

// app.post("/testPost", (request, response) => {
//   return response.send("oie, sou um post")
// })

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"))