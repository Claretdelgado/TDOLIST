import app from "./app";
import mongoose from "mongoose";

async function main() {
    try {
        await mongoose.connect(
            "mongodb://127.0.0.1:27017/tdlist"
        )
        console.log("Conexion a la bd con exito o que?")
        app.listen(4000, () =>{
            console.log("Servidor corriendo con exito")
        })
    } catch (err) {
        console.log("Tienes un error, vuelve")
    }
}
main();