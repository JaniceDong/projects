(function () {
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
//放大镜
        //切换图片
        var iindex = 0;
        $(".small a").click(function () {
           iindex = $(this).index();
            $(".small a").removeClass("hover").eq(iindex).addClass("hover");
            $(".big a").removeClass("active").eq(iindex).addClass("active");
        });
//鼠标进入大图，放大镜出来
        $(".big a").mouseenter(function () {
            $("#move").show();
           $(".large").show();
            $(".big a").removeClass("hover").eq(iindex).addClass("hover");
            $(".large div").removeClass("scal").eq(iindex).addClass("scal");
        });
        //鼠标移出大图，放大镜隐藏
        $(".big").mouseleave(function () {
            $(".large div").eq(iindex).removeClass("scal");
            $(".large").hide();
            $("#move").hide();
        });

        var oMoveWidth = $("#move").width();//200
        var oMoveHeight = $("#move").height();//200
        var oBigWidth = $(".big").width();//400
        var oBigHeight = $(".big").height();//400
        //console.log(oBigHeight);//400
        // console.log(oMoveWidth);//200
        var maxx = oBigWidth - oMoveWidth;//200
        var maxy = oBigHeight - oMoveHeight;//200
        var scale = parseInt(oBigWidth/oMoveWidth);


//给移动小块添加移动事件
        $(".big").bind("mousemove",function(event){
            var x = event.pageX - $(".big").offset().left - oMoveWidth / 2;
            var y = event.pageY - $(".big").offset().top - oMoveHeight / 2;
            if(x <= 0){
                x = 0;
            }
            if(y <=  0){
                y = 0;
            }
            if(x >= maxx){
                x = maxx;
            }
            if(y >=  maxy){
                y = maxy;
            }
            $("#move").css({left:x,top:y});
            $(".large .scal").css({left:-x*scale,top:-y*scale});
        });

//切换商品配置
var index13 = 0;
$(".zs-colour-type .zs-options li").click(function () {
    index13 = $(".zs-colour-type .zs-options li").index($(this));
    $(".zs-colour-type .zs-options li").removeClass("cur").eq(index13).addClass("cur");
});

//更改商品购买的数量
        var buyNum = $(".zs-goods-number").val();
      var  maxNum = 10;
$(".amount-widget .decrease").click(function () {

    if(buyNum <= 0){
        $(".zs-quantity .tips2").css({display:"block"});
        $(".zs-quantity .decrease").css({color:"#999"});
        $(".zs-quantity .increase").css({color:"#666"});
        return;
    }
    buyNum--;
    $(".zs-quantity .tips1").css({display:"none"});
    $(".zs-goods-number").val(buyNum);

});
        $(".amount-widget .increase").click(function () {

            if(buyNum >=maxNum){
                $(".zs-quantity .increase").css({color:"#999"});
                $(".zs-quantity .tips1").css({display:"block"});
                $(".zs-quantity .decrease").css({color:"#666"});
            return;
            }
            buyNum ++;
            $(".zs-quantity .tips2").css({display:"none"});
            $(".zs-goods-number").val(buyNum );
        });

//查看评论
        var indexPage = 0;
        var maxLength = $(".zs-page a").length;
        $(".zs-page a").click(function () {
            indexPage = $(".zs-page a").index($(this));
            $(".zs-page a").removeClass("cur").eq(indexPage).addClass("cur");
          comment(indexPage);
        });

        ///点击下一页
    $(".zs-page .next").click(function () {
        if(indexPage<=maxLength){
            indexPage ++;
            $(".zs-page a").removeClass("cur").eq(indexPage).addClass("cur");
            comment();
        }
    });

        //点击上一页
        $(".zs-page .prev").click(function () {
            if(indexPage>0)
            indexPage --;
            $(".zs-page a").removeClass("cur").eq(indexPage).addClass("cur");
            comment();
        });

            //跨域获取评论
            /*$.ajax({
                url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?json=1&p=3&req=2&csor=1',

               url: 'http://www.zol.com/index.php?c=Ajax_OrderRecord&a=OrderRecordInfo&callback=cb',

                jsonp:"cb",
                dataType : "jsonp",//类型如果不是jsonp则实现不了跨域
                data:{
                    wd:$(this).val()//
                },
                success: function (data) {
                    var sHtml = "";
                    data.s.forEach(function (v,k) {
                        sHtml += "<li> <a href='javascript:;'>" + v + "</a></li>";
                    });
                    $("#search-content").html(sHtml);
                }
            });*/
        comment();//获取的评论，默认page为1
    function comment(){
        $.getJSON('http://www.zol.com/index.php?c=Ajax_OrderReview&a=OrderReviewInfo&goodsId=28642472&score=4&callback=?',{page:indexPage + 1}, function (data){
            var sHtml= "";
            console.log(data.reviewInfo);
            data.reviewInfo.forEach(function (v,k) {
                sHtml+= '<tr><td class="td-1"><div class="comment-text"><p>'+v.content+'</p><div class="comment-score"><span>描述相符<em>'+v.miaoshu+'</em></span><span>服务态度<em>'+v.fuwu+'</em></span><span>发货速度<em>'+v.taidu+'</em></span></div></div></td><td class="td-2"><p>颜色：<span>'+v.suitColorName+'</span></p><p>套装：<span>'+v.suitName+'</span></p></td><td class="td-3"><p class="name">'+v.username+'</p><p>'+v.addTimeNew+'评价</p></td></tr>'
            });
            $(".comment-table").html(sHtml);

        });
    }
        //改变当前的查看数据
    var indexBar = 0;
    $(".zs-tabbar ul li").click(function () {
        indexBar = $(".zs-tabbar ul li").index($(this));
        if(indexBar<=5){
            $(".zs-tabbar ul li").removeClass("cur").eq(indexBar).addClass("cur");
        }
    });

    $(".zs-tabbar .phone-buy").mouseenter(function () {
        $(".zs-tabbar .phone-buy .code").css({display:"block"});
    });
            $(".zs-tabbar .phone-buy").mouseleave(function () {
            $(".zs-tabbar .phone-buy .code").css({display:"none"});
        });



        //购物车
        var
            iGoodsId 	= $(".addcart").attr('data-id'),
            iGoodsPrice = $(".sale-price").text(),
            iGoodsTitle = $(".zs-commodity-title").text(),
            sGoodsSrc   = $(".addcart").attr('data-src'),
            iGoodsColor = $(".cur .can-buy").text();


    $(".addcart").click(function () {
        // 要存储的商品信息：商品ID、商品名称、商品价格、商品数量、商品图片地址
        var
            sGoods = getCookie('goods-cart'),
            bBtn = true;

        if(!sGoods) {
            var aGoods = [];
        } else {
            var aGoods = JSON.parse(sGoods);
        }

        for(var i =0; i < aGoods.length; i++) {
            if(aGoods[i].goodsId == iGoodsId){
                aGoods[i].goodsNum++;
                bBtn = false;
            }
        }

        if(bBtn) {
            var oGoods = {
                goodsId: 	iGoodsId,
                goodsTitle: iGoodsTitle,
                goodsPrice: iGoodsPrice,
                goodsSrc :  sGoodsSrc,
                goodsColor: iGoodsColor,
                goodsNum: 	1
            };
            aGoods.push(oGoods);
        }
        //var aGoods = []; // 存储所有商品信息的数组

        // 写入cookie
        setCookie('goods-cart', JSON.stringify(aGoods), 7, '/');
      console.log(getCookie("goods-cart"));

    });





    });
})(jQuery);