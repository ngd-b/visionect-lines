/**
 * Created by shirley on 2017/7/21.
 */
/*ͼ����Ϣ���ƣ�����
* �ź�ǿ��
* */
//�豸UUID
var p = $(".mrd-item p");
var uuid = p[0].firstChild.nodeValue;

//���ڣ�ѡ����ʱ��
var datepicker = $("#dateRange"),
    date = datepicker.children("span")[0].innerHTML;
//��ʵʱ��ͽ���ʱ��
var fromDate = date.split("to")[0],
    endDate = date.split("to")[1];
//alert(fromDate+":"+endDate);
function signChart(){
    var ctx = document.getElementById("sign").getContext("2d");

    //var formDate = "2015/7/1";
    //var endDate = "2016/7/1";
    $.ajax({
        type:"get",
        url:"/device/charts",
        data:{
            frommDate:fromDate,
            endDate:endDate,
            uuid:uuid
        },
        dataType:"json",
        success:function(data){
            alert(data.data);
        },
        error:function(xhr, status, error){
            alert("status:"+status+"\nerror:"+error);
        }
    });
    var config = {
        type:'line',
        data:{
            labels:["January","February","March","April","May","June", "July"],
            datasets:[
                {
                    fill:false,
                    backgroundColor:window.chartColors.blue,
                    borderColor:window.chartColors.blue,
                    data: [45,32,56,67,78,23]
                }
            ]
        },
        options:{
            responsive:true,
            title:{
                display:false,
                text:"first"
            },
            legend:{
                display:false,
                label:{
                    text:"first"
                }
            },
            tooltips:{
                mode:'index',
                intersect:false
            },
            scales:{
                xAxes:[{
                    display:true,
                    scaleLabel:{
                        display:false,
                        labelString:'Month'
                    }
                }],
                yAxes:[{
                    display:true,
                    scaleLabel:{
                        display:false,
                        labelString:'Value'
                    },
                    ticks:{
                        reverse:true,
                        callback:function(value,index,values){
                            return "-"+value+"db";
                        },
                        min:40,
                        max:90
                    },
                    beginAtZero:false
                }]
            }
        }
    };

    new Chart(ctx,config);
}
//signChart();


//��̬��������--�������
var size = document.getElementById("size");
var interval = document.getElementById("interval");

var sizeValue = size.value;
var intervalValue = interval.value;
var lViewContent = $(".item-lview .backDraw");
var imgSize = $(".backDraw .default");
//var offsetWidthView = lViewContent[0].offsetWidth;
//var offsetHeightView = lViewContent[0].offsetHeight;
//alert(size.value);
function tip(obj,value){
    obj.tooltip({
        text:value
    });
}
//ͼƫ������
var contentWidth = 926,
    contentHeight= 500;
//ͼƬ��С
var defaultWidth = 448,
    defaultHeight = 362;
//��ȡ�����С
var fontSize = 16;
//alert(fontSize);
function contentChange(obj,value){
    //alert(offsetHeightView);
    obj.style.width = contentWidth*value*1.2/6+"px";
    obj.style.height = contentHeight*value*1.2/6+"px";

    for(var i=0;i<imgSize.length;i++){
        imgSize[i].style.width = defaultWidth*value/6+"px";
        imgSize[i].style.height = defaultHeight*value/6+"px";
        $(imgSize[i]).css("font-size",fontSize*value/6+"px") ;
    }
}
tip($(size),sizeValue);
tip($(interval),intervalValue);

$(size).on('input change',function(){
    tip($(this),$(this).val());
    contentChange(lViewContent[0],$(this).val());
});
$(interval).on('input change',function(){
    tip($(this),$(this).val());
})
//�����豸��������ϢԤ����
function liveView(){
    var deviceImg = $(".deviceImg img"),
        sessionImg = $(".sessionImg img");
   // alert(uuid);
    $.ajax({
        type:"get",
        url:"/device/live",
        data:{
            "data":uuid
        },
        dataType:"json",
        success:function(data){
            alert("hello");
        },
        error:function(xhr, status, error){
            alert("status:"+status+"\nerror:"+error);
        }
    });
}
//liveView();
//*
// �豸ʵʱ��ͼ��Ϣ��ʱ��ѡ��
// ʱ��ѡ���ع���ͼ
var configObj = {
    separator:" to ",
    getValue:function(){
        return this.innerHTML;
    },
    setValue:function(s){
        return $(this).children("span")[0].innerHTML = s;
    }
}
datepicker.dateRangePicker(configObj)
    .bind("datepicker-closed",function(){
        alert("charts");
    });
