import express from "express";

const router = express.Router();

router.get("/boys",(req,res)=>{
    try {
    res.send("boys")
    } catch (error) {
     console.log(error);   
    }
})

export default router;