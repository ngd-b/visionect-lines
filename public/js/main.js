/**
 * Created by shirley on 2017/7/5.
 */

$(document).ready(function(){
    //侧边栏点击隐藏
    /*var nav = $(".main .nav");
    nav[0].onclick=function(){
        //alert("hello");
        var left = $(".m-left");
        var width = nav[0].offsetWidth;

        return width==52 ? left[0].style.width="196px":left[0].style.width="52px";
    };*/
//菜单栏点击，视图显示,设备详细信息展示
    /*var dev = $(".mr-view ul");
     var devUUID= $(".mr-view .uuid");
     for(var i=0;i<devUUID.length;i++){
     (function(_i){
     dev[_i].onclick=function(){
     //alert("test");
     var uuid=devUUID[_i].firstChild.nextSibling.nodeValue;
     //alert(uuid);
     $.ajax({
     url:"/main/device/"+uuid,
     data:{
     test:"test"
     },
     type:"get",
     dataType:"json",
     success:function(data){
     alert(data.data);
     },
     error:function(){
     alert("error");
     }
     });
     };
     })(i);
     }
     /*
     devUUID.click(function(){
     showDetail(this);
     });
     function showDetail(obj){
     alert("test");

     }
     */
    /*设备UUID点击切换*/
    var device = $(".mrd-list label");
    var session = $(".mrs-list label");
    var url = "";
    function doubleClick(obj,url){
        var current = $(obj)[0].getElementsByTagName("input");
        //alert(current[0]);
        if(current[0].checked == true){
            window.location.href = url;
        }
    }
    device.click(function(){
        url = "/device?itemIndex=1";
        doubleClick(this,url);   //设备
    });
    session.click(function(){
        url = "/virtual?itemIndex=2";
        doubleClick(this,url);   //会话
    });

    /*device.click(function(){
        var current = $(this)[0].getElementsByTagName("input");
        //alert(current[0]);
        if(current[0].checked == true){
            window.location.href = "/device?itemIndex=1";
        }
        for(var i =0;i<deviceCheck.length;i++){

            if(current = deviceCheck[i] && deviceCheck[i].checked==true){
                alert(deviceCheck[i]);
                window.location = "http://192.168.30.36:8866/device?itemIndex=1";
            }
        }
    });*/
    /*设备详细信息点击切换*/
    var devItem = $(".mrd-header ul li");
    var item = $(".mrd-item .item");
    for(var i=1;i<devItem.length;i++){
        (function(_i){
            devItem[_i].onclick=function(){
                // alert("切换");
                for(var j=0;j<item.length;j++){
                    item[j].style.display="none";
                }
                item[_i-1].style.display="block";
            };
        })(i);
    }
    /*屏幕详细信息点击切换*/
    var virtualitem = $(".mrs-header ul li");
    var virtualS = $(".mrs-item .item");
    for(var i=1;i<virtualitem.length;i++){
        (function(_i){
            virtualitem[_i].onclick=function(){
                // alert("切换");
                for(var j=0;j<virtualS.length;j++){
                    virtualS[j].style.display="none";
                }
                virtualS[_i-1].style.display="block";
            };
        })(i);
    }

    /*侧边栏点击效果显示*/
    function GetRequest(){
        var url = location.search;
        var theRequest = new Object();
        if(url.indexOf("?")!=-1){
            var str = url.substr(1);
            strs = str.split("&");
            for(var i=0;i<strs.length;i++){
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
    var Request = new Object();
    Request = GetRequest();
    var itemIndex;
    itemIndex = Request['itemIndex'];

    //alert(itemIndex);
     var menu= $(".m-menu ul li");

    var def=$(".m-menu ul .default");
    //点击跳转后样式改变
    if(itemIndex!=null&&itemIndex!=''){
        for(var j=0;j<menu.length;j++){
            $(menu[j]).removeClass("active");
        }
        $(menu[itemIndex]).addClass('active');
    }else{
        def.addClass("active");
    }

    //点击市样式改变
     /*menu.click(function(){
        for(var i=0;i<menu.length;i++){
            $(menu[i]).removeClass("active");
        }
        $(this).addClass("active");
    });
    var menu= $(".m-menu ul li");
    menu.click(function(){
        $(this).addClass("active");
    });*/
});


/*各种提示，怎么方便怎么写*/
//静态内容提示，
// 设置class ='tip-hotspot' data-tip= 'info'
ToolTip.init({
    delay: 400,
    fadeDuration: 250,
    fontSize: '1.0em',
    theme: 'dark',
    textColor: '#fff',
    shadowColor: '#000',
    fontFamily: "'Roboto-Medium', 'Roboto-Regular', Arial"
});
//通过bootstrap来设置提示
$("[data-toggle='popover']").popover();



