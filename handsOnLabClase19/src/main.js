import { app } from "./app/server.js"
import { PORT } from "./config/server.config.js"

app.listen(PORT , () => console.log('App listening on port 8080!'))