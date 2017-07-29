(function ($) {
    $(function () {
       var index = 0;
       var timer = null;

        timer = setInterval(change,2000);//自动变换

        $("#box").mouseenter(function () {//鼠标移入
            clearInterval(timer);
            $(".dir-btn").css({display:"block"});
        });

        $("#box").mouseleave(function () {//鼠标离开
            $(".dir-btn").css({display:"none"});
            timer = setInterval(change,2000);
        });

        $("#right-btn").click(function () {//右边按钮
            change();
        });

        $("#left-btn").click(function () {//左边按钮
            index -- ;
            if(index < 0){
                index = 5;
            }
            changeTo();
        });


    $(".btn-list a").mouseenter(function () {
        console.log(index);
        index  = $(this).index();
        changeTo();

    });
        function change() {//自动轮播变化
            index ++;
            if(index > 5){
                index = 0;
            }
            changeTo();
        }
     function changeTo(){//透明度变化
         $("#box li").animate({opacity:0}, function () {
             $(this).css({display:"none"});
         });
         $("#box li").eq(index).css({display:"block"}).stop(true).animate({opacity:1});
         $(".btn-list a").removeClass("hover").eq(index).addClass("hover");
     }

    });
})(jQuery);
