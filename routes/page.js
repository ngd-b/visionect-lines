/**
 * Created by shirley on 2017/8/24.
 */
var express = require("express");
var router = express.Router();

router.get("/page1",function(req,res,next){
    res.render("page1");
});
router.get("/page2",function(req,res,next){
    res.render("page2");
});
router.get("/page3",function(req,res,next){
    res.render("page3");
});

module.exports = router;