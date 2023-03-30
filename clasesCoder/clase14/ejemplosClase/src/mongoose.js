import mongoose from "mongoose"

await mongoose.connect("mongodb://localhost/data")
const personasDb = mongoose.conecction.db.collection("data")
const personas = await personasDb.find().toArray()
console.log(personas)