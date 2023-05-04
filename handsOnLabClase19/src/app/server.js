import express from "express";

export const app = express()
app.engine("handlebars", engine())
app.get("/", (req, res, next) => {
  console.log(res.sendStatus("200"))
})