import express from "express";
import {OrderAdd} from "../database/data-store";

const router = express.Router();

router.get('/get',(req,res)=>{

})
router.post('/add',async (req,res)=>{
    const order = req.body;
    try {
        await OrderAdd(order);
        res.send("Order has been placed");
    }catch(err){
        res.send("Error placing order")
    }
})
router.put('/update/:id',(req,res)=>{

})
router.delete('/delete/:id',(req,res)=>{

})
router.get('/getAll',(req,res)=>{

})
export default router;