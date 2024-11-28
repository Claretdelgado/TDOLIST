import { Request, Response} from "express"
import { UserModel } from "../models/Users";
import { ActivityModel } from "../models/Activities";

export default{
    signUp:async (req:Request, res:Response)=>{
        try{
                //obtener info de la peticion
            const name = req.body.name;
            const password = req.body.password;
            const email = req.body.email;
            const rol = req.body.rol;

            //validar que la info exixte
            if(!name || !password || !email || !rol){
                res.status(400).json({msg: "faltan parametros para crear un usuario"})
                return;
            }
            //para crear un usuario
            await UserModel.create({
                name,
                password,
                email,
                rol
            });

            res.status(200).json({msg:"usuario almacenado con exito."})
            return;

        } catch(error){
            console.log("el error ocurrido: ", error)
            res.status(500).json({msg:"ocurrio un error al registrar el usuario"})
            return;
        }
    },

    signIn:async (req:Request, res:Response)=>{
    try{
            //obtener datos
            const email = req.body.email;
            const password = req.body.password;

            //buscar al usuario por su correo y contraseña
            const user = await UserModel.findOne({
                email,
                password
    });
            //validar que el usuario existe
            if(!user){
                res.status(400).json({msg: "no se encontro el usuario con esas credenciales."})
            return;
        }
        res.status(400).json({msg: "el usuario inicio sesion correctamente", user})
        return;

    } catch(error){
            console.log("el error ocurrido: ", error)
            res.status(500).json({msg:"ocurrio un error al iniciar sesion"})
            return;
        }
        
    }
}