var express = require("express");
var router = express.Router();

router.get('/:id',function(req,res){
    res.send("你好呀"+req.params["id"]);
})

module.exports = router;