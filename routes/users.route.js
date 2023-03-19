const express = require("express");
const { getUsers, saveUsers } = require("../controllers/users.controller");

const router=express.Router();

router.get("/users",getUsers);
router.post("/users",saveUsers);

router.get("/get",(req,res)=>{
    res.send('hello');
});

module.exports=router;
