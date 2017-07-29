/**
 * Created by Administrator on 2016/9/24.
 */
window.onload = function() {
    var sGoods = getCookie('goods');

    if(sGoods == undefined){
    }else {
        var aGoods = JSON.parse(sGoods);
    }

    for (var i = 0; i < aGoods.length; i++) {
        $(".shop-cat-box").append("<ul data-id='" + aGoods[i].gId + "' class='shop-cat-list'>" +
            "<li class='shop-list1'>" +
            "<i class='shop-listI'></i>" +
            "</li>" +
            "<li class='shop-list2'> " +
            "<dl> " +
            "<dt><img src='" + aGoods[i].img + "' alt=''></dt> " +
            "<dd> " +
            "<p style='height: 44px;'>" + aGoods[i].name + "</p> " +
            "<i >" + aGoods[i].shopNum + "</i> " +
            "</dd> " +
            "</dl> " +
            "</li> " +
            "<li class='shop-list3'> <p>颜色：" + aGoods[i].color + "</p> <p>尺码：" + aGoods[i].size + "</p> </li> " +
            "<li class='shop-list4'> <i>￥" + aGoods[i].yuanjia + "</i> <em>￥" + aGoods[i].price + "</em> </li> " +
            "<li class='shop-list5'> <span class='shop-label-left' onselectstart='return false'>-</span> <input type='text' class='shop-label-num' value='" + aGoods[i].number + "'> <span class='shop-label-right' onselectstart='return false'>+</span> </li> " +
            "<li class='shop-list6'>" + aGoods[i].price * aGoods[i].number + "</li> " +
            "<li class='shop-list7'> <a href='javascript:;' class='add-god' >移入我的点赞</a> <a href='javascript:;' class='delete-goods'>删除</a> " +
            "</li> " +
            "</ul>")
    }
    $(".delete-goods").on("click", function () {
        var iIndex = $(".delete-goods").index($(this))
        $(this).parent().parent().remove();
        aGoods.splice(iIndex, 1);
        setCookie('goods', JSON.stringify(aGoods), 7, '/');
    })

    $(".shop-label-left").click(function () {
        var Index = $(".shop-label-left").index($(this))
        shopNum = aGoods[Index].number;
        shopNum--;
        var shopadd = 0;
        aGoods[Index].number = shopNum;
        $(".shop-list6").eq(Index).text(aGoods[Index].number *aGoods[Index].price)
        setCookie('goods', JSON.stringify(aGoods), 7, '/');
        $(".shop-label-num").eq(Index).val(shopNum);
        $(".shop-label-num").each(function (i) {
            shopadd += parseInt($(".shop-label-num").eq(i).val())
        })
        $(".xuan-shop").text(shopadd)
        var shopprice = 0;
        $(".shop-list6").each(function(j){
            shopprice += parseInt($(".shop-list6").eq(j).text())
        })
        $.cookie("shop-add",shopprice,{path:"/"},{expires:66})
        $(".shop-youhui").text(shopprice);
        $(".shop-zojia").text(shopprice);
        if (shopNum < 1) {
            $("#veo_pop_warp").css({display: 'block'});
            $("#pop_message").text("对不起，数量最少为1件")
            $(".shop-label-num").val(1);
            aGoods[Index].number = $(".shop-label-num").eq(Index).val();
            setCookie('goods', JSON.stringify(aGoods), 7, '/');
        }
    })
    $(".shop-label-right").click(function () {
        var Index = $(".shop-label-right").index($(this))
        shopNum2 = aGoods[Index].number;
        shopNum2++;
        $(".shop-list6").eq(Index).text((aGoods[Index].number+1) *aGoods[Index].price)
        var shopadd = 0;
        $(".shop-label-num").each(function (i) {
            shopadd += parseInt($(".shop-label-num").eq(i).val())
        })
        var shopprice = 0;
        $(".shop-list6").each(function(j){
            shopprice += parseInt($(".shop-list6").eq(j).text())
        })
        $.cookie("shop-add",shopprice,{path:"/"},{expires:66})
        $(".shop-youhui").text(shopprice);
        $(".shop-zojia").text(shopprice);
        $(".xuan-shop").text(shopadd + 1);
        aGoods[Index].number = shopNum2;
        setCookie('goods', JSON.stringify(aGoods), 7, '/');
        $(".shop-label-num").eq(Index).val(shopNum2);
        if (shopNum2 > 50) {
            $("#veo_pop_warp").css({display: 'block'});
            $("#pop_message").text("对不起，数量最多为50件")
            $(".shop-label-num").val(50)
            aGoods[Index].number = $(".shop-label-num").eq(Index).val();
            setCookie('goods', JSON.stringify(aGoods), 7, '/');
        }
    })
    $(".guanbi").click(function () {
        $("#veo_pop_warp").css({display: 'none'});
    })
    $(".close_pop").click(function () {
        $("#veo_pop_warp").css({display: 'none'});
    })


}