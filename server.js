import express from "express";
import "dotenv/config"

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.get("/",(req,res)=>{
 return res.send("hi i am kuldeep")
})

// routes files \
import router from "./routes/index.js";
app.use(router)

app.listen(port,()=>{
 console.log("server listening on port" + port);
})