
var fs = require("fs");

module.exports=function(app){
    app.get("/",function(req,res,next){
        res.render("test");
    });
    app.get("/data",function(req,res,next){

        var index= req.query.index;
        var p =new Promise(function(resolve,reject){
            fs.readFile("./public/dataJson/routeInfo.json","utf8",function(err,data){
                if(err)
                    reject(err);
                resolve(data);
            });
        });
        p.then(function(result){
            var data = JSON.parse(result);
            console.log(data);
            res.send({
                data:data
            });
        })
            .catch(function(err){
                console.log("err:"+err.message);
            })

        //UserModel.createUser(user);
    });
    app.use("/page",require("./page"));
};


