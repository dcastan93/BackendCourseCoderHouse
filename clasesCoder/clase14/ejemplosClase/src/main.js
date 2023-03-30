import { MongoClient } from 'mongodb';

const cnxStr = "mongodb+srv://dcastan93:Sara0801@cluster0.dwiuaeo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(cnxStr);
await client.connect()

const personasDb = client.db().collection("tuDoctorOnlineDb")

const persona = await personasDb.findOne()
console.log(personasDb)
await client.close()