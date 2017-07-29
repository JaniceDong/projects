(function ($) {
    $(function () {
        $(".current input").click(function () {//默认地址
            $(".add-edits").css({display:"none"});
            $(".add-address input").removeAttr("checked");
            $(".add-address label").css({display:"block"});
            $(".current input").attr("checked","checked");
            $(".current").css({background:"#fff5d6"});
            $(".operate").css({display:"block"});


        });
        $(".add-address input").click(function () {//添加新地址
            $(".add-edits input").attr("checked","checked");//新地址
            $(".add-edits").css({display:"block"});
            $(".add-address label").css({display:"none"});
            $(".current input").removeAttr("checked");//默认地址
            $(".current").css({background:"none"});
            $(".operate").css({display:"none"});
        });
                //hover background:#fff9e5;
        $(".closebtn").click(function () {
            $(".add-edits").css({display:"none"});
            $(".add-address input").prop("checked",false);
            $(".add-address label").css({display:"block"});
            $(".current input").prop("checked","checked");//prop("checked",true)也可以
            $(".current").css({background:"#fff5d6"});
            $(".operate").css({display:"block"});
        });

//添加购物车信息到订单
        var
            sGoods = getCookie('goods-cart'),
            aGoods = sGoods ? JSON.parse(sGoods) : [],
            sUlHtml = '';

        for(var i =0; i < aGoods.length; i++) {

            var totalPrice = aGoods[i].goodsPrice * aGoods[i].goodsNum;

            sUlHtml += '<tr><td class="infor"><a href="javascript:;" class="pic"><img src="'+aGoods[i].goodsSrc+'" alt=""></a><h3 class="title"><a href="details.html"> '+aGoods[i].goodsTitle+'</a></h3></td><td class="color-suits"><div class="color">'+aGoods[i].goodsColor+'</div><div class="suits"><span>官方标配</span><div class="suit-details"><i class="ico"></i><p>套装详情：</p><p>【iPhone 7 Plus*1；具有线控功能和麦克风的 Apple EarPods*1；Lightning to USB 连接线*1；USB 电源适配器*1；资料】</p></div></div></td><td class="saletype">-</td><td class="price">￥'+aGoods[i].goodsPrice+'</td><td>--</td><td class="amount">'+aGoods[i].goodsNum+'</td><td class="total">￥'+totalPrice+'</td></tr>';

            $(".total").text(totalPrice);
        }
        //  console.log($("table tr"));
        $(".goods").append(sUlHtml);

        $(".suits").mouseenter(function () {
            console.log("鼠标移入");
            $(".suits .suit-details").css({display:"block"});
        });
        $(".suits").mouseleave(function () {
            $(".suits .suit-details").css({display:"none"});
        });

        //删除默认地址
        $(".del").click(function () {
            $(".current").hide();
            $(".add-edits").css({display:"block"});
            $(".add-address label").css({display:"none"});
            $(".closebtn").css({display:"none"});
           // $(".add-edits input").prop("checked",true);
        });










    });
})(jQuery);
