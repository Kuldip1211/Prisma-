import Router  from "express";
import UserRouter from  "./userroutes.js"
const router = Router();
router.use("/api/user",UserRouter)
export default router