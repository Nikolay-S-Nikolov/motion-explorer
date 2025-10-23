import { Router } from "express";

const homeController = Router();

homeController.get('/', (req,res)=>{
    res.status(200).json({ok:true})
})

export default homeController