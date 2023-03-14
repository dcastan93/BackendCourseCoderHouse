import { Router } from "express";

export const apiProducts = Router();
apiProducts.get("/", (req, res) => { res.json([]); })
apiProducts.post("/", (req, res) => { res.json(); });
apiProducts.put("/", (req, res) => { res.json(); });
apiProducts.delete("/", (req, res) => { res.json(); });
