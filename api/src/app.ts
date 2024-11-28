import express, { Application, Request, Response } from "express";
import cors from "cors";
import UsersController from "./Controllers/UsersController";

const app:Application = express ();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (_req:Request, res:Response) => {
    res.send("Hola desde el servidor TS")
});

//rutas de usuario
app.post("/user/create", UsersController.signUp);
app.post("/user/sign-in", UsersController.signIn);


export default app;
