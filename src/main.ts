import express, { Application } from "express";
import { userRouter } from "./routes/userRoute.js";
import sequelize from "./models/db.config.js";
import fileUpload from "express-fileupload";

const PORT = 3001;


const app: Application = express();

app.use(express.json())
app.use("/static", express.static("static"))
app.use(fileUpload({}))
app.use("/api", userRouter)


/* sequelize.sync({ force: true }).then(() => {
    console.log("Синхронизация DB");
}); */


app.listen(PORT, () => {
    console.log(("Server started"))
})

