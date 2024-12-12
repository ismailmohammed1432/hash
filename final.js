import express from "express"
import userRouter from "./controllers/users/index.js";
import foodRouter from "./controllers/food/index.js"

let app = express()
let PORT =5000

app.get("/", (req,res)=>{
    try {
         
        res.status(200).json({msg :"hello world"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error})
    }
})


app.use("/apiuser",userRouter);
app.use("/apifood",foodRouter)

app.listen (PORT,()=>{
    console.log(`the server is up and running ${PORT}`);
})