(function ($) {
    $(function () {
        var index = 0;
        var timer = null;
        var bBtn = true;
        var firstimg = $("#image-list li").first().clone();//复制第一张图片
        $("#image-list").append(firstimg).width($("#image-list li").length * ($("#image-list img").width()));//追加到最后，更新ul的宽度

        var imageListLen = $("#image-list li").length;
        var imgWidth = $("#image-list img").width();

///右边按钮
        $("#right-btn").click(function () {
            move();
        });
///左边按钮
        $("#left-btn").click(function () {
            if(bBtn){
                bBtn = false;
                index --;
                if(index == -1){
                    index = imageListLen - 2;
                    $("#image-list").css({left:-(imageListLen - 1) * imgWidth});//立刻显示到倒数第一张图
                }//运动到倒数第二张
                $("#image-list").stop(true).animate({left:-index * imgWidth},1000,function(){
                    bBtn = true;
                });
                $("#btn-list a").removeClass("active").eq(index).addClass("active")
            }
        });

        //显示和隐藏按钮hover鼠标悬停效果
        $("#box").hover(function () {//鼠标移动到元素执行第一个函数，鼠标离开执行第二个函数
           $("#direction-btn").show();
        }, function () {
            $("#direction-btn").hide();
        });
//鼠标划入圆点
        $("#btn-list a").mouseenter(function () {
           var index = $(this).index();
            $("#image-list").stop(true).animate({left:-index * imgWidth},300);
            $("#btn-list a").removeClass("active").eq(index).addClass("active");
        });
//定时自动播放
        timer= setInterval(function () {
           move();
        },2000);

///鼠标移入box定时器暂停
        $("#box").hover(function () {
            clearInterval(timer);
        }, function () {
            timer= setInterval(function () {
              move();
            },2000);
        });

function move(){
    if(bBtn){
        bBtn = false;
        index ++;
        if(index == imageListLen){
            index = 1;
            $("#image-list").css({left:0});
        }
        $("#image-list").stop(true).animate({left:-index * imgWidth},1000,function(){
            bBtn = true;
        });
        if(index == imageListLen - 1){
            $("#btn-list a").removeClass("active").eq(0).addClass("active");
        }else{
            $("#btn-list a").removeClass("active").eq(index).addClass("active");
        }
    }

}
    });
})(jQuery);
