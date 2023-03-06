import express from "express"
//esto se monta un servidor de forma màs facil

const app = express();

app.get('/usuarios/:nroUsuario/propiedades', (req, res) => {
 res.json({urlParams: req.params, queryParams: req.query})
});
app.get('/cosas', (req, res) => {
  res.sendFile("cosas.html", {root: "./views"})
 });
app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);