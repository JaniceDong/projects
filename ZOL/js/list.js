(function ($) {
    $(function () {
        var oLi = $(".nav .main-con li");
        var oCate = $(".nav .main-con .category");
        var index9 = 0;

//banner商品列表 显示隐藏

        oLi.mouseenter(function () {
            index9 = $(this).index();
            oLi.removeClass("select").eq(index9).addClass("select");
            oCate.css({display:"none"}).eq(index9).css({display:"block"});
        });
        oLi.mouseleave(function () {
            oLi.eq(index9).removeClass("select");
            oCate.css({display:"none"});
        });
        $(".nav .nav-title").mouseenter(function () {
            $(".nav .con1").css({display:"block"});
        });
        $(".nav").mouseleave(function () {
            $(".nav .con1").css({display:"none"});
        });

    //点击设为默认值
        var index10 = 0;
        $(".toolbar .sort li").click(function () {
            index10 = $(this).index();
            if(index10<=4){
                $(".toolbar .sort li").removeClass("current").eq(index10).addClass("current");

            }
            return;
        });

       /* var price = [];
        price[1] = 5288;
        price[2] = 6688;
        price[3] = 6688;
        price[4] = 6600;
        price[5] = 5000;
        price[6] = 6000;
        price[7] = 6608;
        price[8] = 6500;
        price[9] = 5600;
        price[10] = 5800;
        price[11] = 8500;
        price[12] = 8800;
        price[13] = 8888;
        price[14] = 6688;
        price[15] = 6660;
        price[16] = 6686;
        price[17] = 6668;
        price[18] = 9500;
        price[19] = 9800;
        price[20] = 1800;
        price[21] = 6088;
        price[22] = 6600;
        price[23] = 6699;
        price[24] = 6666;
        price[25] = 6589;*/


        $(".toolbar .sort .delivery-origin").mouseenter(function () {
            $(".toolbar .sort .delivery-origin").css({background:"#fff",borderColor:"#e6e6e6"});
            $(".toolbar .sort .commdress-list").css({display:"block"});
        });
        $(".toolbar .sort .comm-dress").mouseleave(function () {
            $(".toolbar .sort .delivery-origin").css({background:"#f7f7f7"});
            $(".toolbar .sort .commdress-list").css({display:"none"});
        });


        $(".toolbar .sort .price-range").mouseenter(function (){
            $(".toolbar .sort .operation").css({display:"block"});
        });
        $(".toolbar .sort .price-range").mouseleave(function (){
            $(".toolbar .sort .operation").css({display:"none"});
        });
//价格框
        var index11 = 0;
        $(".price-range .inner .form .text").focus(function () {
            index11 = $(".inner .form .text").index($(this));
            console.log(index11);
            $(".inner .form .text").eq(index11).val("");
        });

        $("#priceCancel").click(function () {
            $(".form .text").val("");
        });

        var index12 = 0;
        $(".goods-list li").mouseenter(function () {
            index12 = $(this).index();
            $(".goods-list li").removeClass("hover").eq(index12).addClass("hover");
            $(".goods-list .shop-infor").removeClass("active").eq(index12).addClass("active");
            $(".goods-list .attention").eq(index12).css({display:"block",right:9});
        });
        $(".goods-list li").mouseleave(function () {
            $(".goods-list li").eq(index12).removeClass("hover");
            $(".goods-list .shop-infor").eq(index12).removeClass("active");
            $(".goods-list .attention").eq(index12).css({display:"none",right:10});
        });





    });
})(jQuery);
