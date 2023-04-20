import express, { Application, Request, Response } from "express";
import { userRouter } from "./routes/userRoute.js";

const PORT = 3001;

const app: Application = express();

app.use(express.json())
app.use("/api", userRouter)






app.listen(PORT, () => {
    console.log(("Server started"))
})

