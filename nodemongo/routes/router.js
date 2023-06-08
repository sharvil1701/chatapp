const express=require("express");
const router=express.Router();
const task=require('../controllers/mainController')

router.get('/:user',task.task);
router.post('/create',task.sendtask);

module.exports=router;