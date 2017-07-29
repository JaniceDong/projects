//jquery实现放大镜
(function ($) {
    $(function(){
        var index = 0;
        $("#small a").mouseenter(function () {//鼠标移动到小图片边框显示
            index = $(this).index();
            $("#small a").removeClass("hover").eq(index).addClass("hover");
            $("#big a").removeClass("active").eq(index).addClass("active");
        });

        $("#big").mouseenter(function () {///鼠标移动到上方大图，被放大的图片显示
            $("#large").css({display:"block"});
            $("#move").css({display:"block"});
            $("#large a").removeClass("select").eq(index).addClass("select");
        });
        $("#big").mouseleave(function () {//鼠标离开上放大图
            $("#large").css({display:"none"});//被放大的图片消失
            $("#move").css({display:"none"});//滑块消失
            $("#large a").eq(index).removeClass("select");
        });

        var oMoveWidth = $("#move").width();//滑块的宽度
        var oMoveHeight = $("#move").height();//滑块的高度
        var oBigWidth = $("#big").width();//大图的宽度
        var oBigHeight = $("#big").height();//大图的高度
        var maxx = oBigWidth - oMoveWidth;//滑块移动的最大宽度
        var maxy = oBigHeight - oMoveHeight;//滑块移动的最大高度
        var scale = parseInt(oBigWidth/oMoveWidth);//放大的倍数
       // console.log(scale);   //2

    $("#big").bind("mousemove", function (evt) {
        var x = evt.pageX - $("#big").offset().left - $("#move").width()/2;//滑块在big里的x
        var y = evt.pageY - $("#big").offset().top - $("#move").height()/2;//滑块在big里的y
        if(x<0){
            x=0;
        }
        if(x>maxx){
            x=maxx;
        }
        if(y<0){
            y=0;
        }
        if(y>maxy){
            y=maxy;
        }
        $("#move").css({left:x,top:y});
        $("#large .select").css({left:-scale*x,top:-scale*y});//被放大的图片的位置
        console.log(-scale*x);
    });


    });
})(jQuery);
