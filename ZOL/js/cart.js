(function () {
    $(function () {

        var
            sGoods = getCookie('goods-cart'),
            aGoods = sGoods ? JSON.parse(sGoods) : [],
            sUlHtml = '';

        for(var i =0; i < aGoods.length; i++) {
            var totalPrice = aGoods[i].goodsPrice * aGoods[i].goodsNum;
            sUlHtml += '<tr class="hide"><td colspan="2" class="s-infor"><input type="checkbox" checked class="all"><a href="javascript:;" class="pic"><img src="' + aGoods[i].goodsSrc +'" alt=""></a><div class="inforbox"><h3 class="tit"><a href="details.html">'+aGoods[i].goodsTitle+'</a></h3><div class="security"><a href="javascript:;" class="security-a"></a></div></div></td><td class="s-price"><em>'+aGoods[i].goodsPrice+'</em></td><td class="s-amount"><div class="buy-num"><a class="minus" href="javascript:;">-</a><input type="text" autocomplete="off" class="text-amount" value="'+aGoods[i].goodsNum+'"><a class="plus" href="javascript:;">+</a><div class="tips-2"></div></div></td><td class="s-agio"><div>--</div></td><td class="s-total"><em>'+totalPrice+'</em></td><td class="s-del"><div class="s-delbox"><a href="javascript:;">移入收藏夹</a><a href="javascript:;" class="del">删除</a><div class="deletebox"><p>确认要删除该商品么？</p><a href="javascript:;" class="yes">是的</a><a href="javascript:;" class="no">取消</a><i></i></div></div></td></tr>';

            $(".total-price").text(totalPrice);
        }
      //  console.log($("table tr"));
        $("table").append(sUlHtml);

//减少购买数量
        $(".minus").click(function () {
            console.log(aGoods[0].goodsNum);
            if(aGoods[0].goodsNum<=1){
                return;
            }
            aGoods[0].goodsNum --;
            setCookie('goods-cart', JSON.stringify(aGoods), 7, '/');
            $(".text-amount").val(aGoods[0].goodsNum);
            $(".total-price").text(aGoods[0].goodsPrice * aGoods[0].goodsNum);
            $(".s-total em").text($(".s-price").text() * aGoods[0].goodsNum);
            $(".total-price").text($(".s-price").text() * aGoods[0].goodsNum);
        });
//增加购买数量
        $(".plus").click(function () {
            if(aGoods[0].goodsNum>=30){
                return;
            }
            aGoods[0].goodsNum++;
            console.log(aGoods[0].goodsNum);
            setCookie('goods-cart', JSON.stringify(aGoods), 7, '/');
            $(".text-amount").val(aGoods[0].goodsNum );
            $(".s-total em").text($(".s-price").text() * aGoods[0].goodsNum);
            $(".total-price").text($(".s-price").text() * aGoods[0].goodsNum);
            //$(".total-price").text(aGoods[0].goodsPrice * aGoods[0].goodsNum);

        });
        //$(".total-price").text(aGoods[0].goodsPrice * aGoods[0].goodsNum);


//提交订单
        $(".accounting-btn").click(function () {
            location.href = "order.html";
        });
    $(".button").click(function () {
       location.href = "order.html";
    });
//删除
        $(".del").click(function () {
            $(".deletebox").css({display:"block"});
        });
        //确定删除
        $(".yes").click(function () {
            removeCookie("goods-cart", '/');
            $(".deletebox").css({display:"none"});
            $(".hide").hide();
        });
        //取消删除
        $(".no").click(function () {
            $(".deletebox").css({display:"none"});
        });

        var btn = true;
       $(".a1").click(function () {
           if(btn){
               btn = false;
             $(".all").prop("checked", false);
           }else{
               btn = true;
               $(".all").prop("checked","checked");
           }

       }) ;

    });
})(jQuery);

