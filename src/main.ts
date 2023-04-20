import express, { Application, Request, Response } from "express";
import { userRouter } from "./routes/userRoute.js";
import sequelize from "./models/db.config.js";

const PORT = 3001;

const app: Application = express();

app.use(express.json())
app.use("/api", userRouter)


/* sequelize.sync()
    .then(() => {
        console.log("Synced db")
    })
    .catch(err => {
        console.log("Failed to sync db: " + err.message)
    })

sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
}); */



app.listen(PORT, () => {
    console.log(("Server started"))
})

