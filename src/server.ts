import express, { response } from "express";

// @types/express para poder acessar as tipagens
const app = express();

app.get("/test", (request, response) => {
  return response.send("oie, sou um get")
})

app.post("/testPost", (request, response) => {
  return response.send("oie, sou um post")
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"))