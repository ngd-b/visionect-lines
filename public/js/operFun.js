/**
 * Created by shirley on 2017/7/17.
 */
/*阻止事件点击冒泡*/
$("input").click(function(e){
    e.stopPropagation();
});

function addCancel(){
    window.location.reload();
}
/*点击添加按钮，动态添加输入框----添加用户*/
function addUser(){
    //alert("用户");
    var options="";
    var addUser = document.getElementsByClassName("mra-list");
    options+='<form method="get" action="/users/add">' +
        '<ul><li><input type="text" name="username" required/></li>'+
        '<li class="url"><input type="text" name="password" required/></li>'+
        '<li class="enable"><input type="checkbox" name="enabled"/></li>'+
        '<li class="opera"><button type="submit" class="btn btn-primary">保存</button>&nbsp;&nbsp;' +
        '<button type="button" class="btn btn-default" onclick="addCancel()">取消</button>' +
        '</li></ul></form>';
    /*options+='<form method="post" action="/users/add">' +
        '<input type="text" name="username" />'+
        '<input type="text" name="password" />'+
        '<input type="checkbox" name="enabled"/>'+
        '<button type="submit" class="btn btn-primary">保存</button>&nbsp;&nbsp;' +
        '<button type="button" class="btn btn-default" onclick="addCancel()">取消</button>';*/

    $(addUser[0]).append(options);

}
function userAlert(index){
    var name = $("input[name='username']")[index].value,
        password = $("input[name='password']")[index].value,
        isActive = $("input[name='isActive']")[index].value;
    $.ajax({
        type:"get",
        url:"/users/alert",
        data:{
            name:name,
            password:password,
            isActive:isActive
        },
        dataType:"json",
        success:function(data){
            alert(data.data);
        },
        error:function(xhr,status,error){
            alert("status:"+status+"\nerr:"+error);
        }
    });

}
/*添加屏幕*/
function addScreen(){
    var option = "";
    var addScreen = document.getElementsByClassName("mrs-view");
    alert("自动生成！");
}

function addAPIkey(){
    alert("api");
}
/*添加APP*/
function addApp(){
    //alert("app");
    var options="";
    var addApp = document.getElementsByClassName("mra-list");
    options+='<form method="get" action="/apps/add">' +
        '<ul><li><input type="text" name="appName" required/></li>'+
        '<li class="url"><input type="text" name="appUrl" required/></li>'+
        '<li><input type="text" name="appDescription" required/></li>'+
        '<li class="opera"><button type="submit" class="btn btn-primary">保存</button>&nbsp;&nbsp;' +
        '<button type="button" class="btn btn-default" onclick="addCancel()">取消</button>' +
        '</li></ul></form>';

    $(addApp[0]).append(options);
}
function appAlert(id,index){
    var name = $("input[name='appName']")[index].value,
        url = $("input[name='appUrl']")[index].value,
        desc = $("input[name='appDesc']")[index].value;
    alert(name);
    $.ajax({
        type:"GET",
        url:"/apps/alert",
        data:{
            id:id,
            appName:name,
            appUrl:url,
            appDesc:desc
        },
        dataType:"json",
        success:function(data){
            alert("hello");
            window.location.reload();
        },
        error:function(xhr,status,error){
            alert("status:"+status+"\nerror:"+error);
        }
    });
}
//**
// 统一做get向后台请求
// 公用请求，没有数据返回处理，post，put ，delete
function requestWay(reqData,reqUrl,url){
    $.ajax({
        type: "get",
        url: reqUrl,
        data: {
            "data":reqData
        },
        dataType: "json",
        success: function (data) {
            alert("data:" + data.data);
            if(url!=null){
                window.location.href =url;
            }else{
                window.location.reload();
            }
        },
        error: function (xhr, status, error) {
            alert("status:" + status + "\nerr:" + error);
        }
    });
}
function quit(tip){
    if(tip==1){
        window.location.href ="/device?itemIndex=1"
    }else if(tip == 2){
        window.location.href ="/virtual?itemIndex=2"
    }

}