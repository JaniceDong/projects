/**
 * Created by Administrator on 2016/9/26.
 */
window.onload = function(){
    var
        sGoods = getCookie('goods'),
        aGoods = JSON.parse(sGoods);
    for (var i = 0; i < aGoods.length; i++) {
        $(".order-shop table").append(
            "<tbody><tr> " +
            "<td width='300'> " +
            "<div class='order-list1'> " +
            "<a href='javascript:;' target='_blank'>" +
            "<img src='"+ aGoods[i].img +"'></a> " +
            "<a href='javascript:;' target='_blank' class='order-text'>"+ aGoods[i].name +"  "+ aGoods[i].shopNum +" </a> " +
            "</div> </td> <td width='300'>"+ aGoods[i].color +"<br>"+ aGoods[i].size +"</td> " +
            "<td width='200'>"+ aGoods[i].number +"                                <p> " +
            "<strong>有货</strong> " +
            "</p> </td> <td width='200'> " +
            "<i class='order-oriprice'>￥"+ aGoods[i].yuanjia +"</i>" +
            "<br> <b class='order-salePrice'>￥"+ aGoods[i].price +"</b> </td> " +
            "<td width='270'> <b class='order-price'>￥"+ aGoods[i].price * aGoods[i].number +"</b> " +
            "</td> </tr> " +
            "</tbody> " +
            ""
        )
    }
    $("#goods_total").text($.cookie("shop-add"));
    $("#payment").text($.cookie("shop-add"))
    $("#applyNew").click(function(){
        $(".order-shop-add").css({display:'block'})
    })
    $(".order-true").click(function(){
        $(".order-shop-add").css({display:'none'})
    })
    $(".invoice-i").click(function(){
        $(".invoice-i").css({background:'#f8584f'})
        $("#order-fapiao").css({display:'block'})
    })
    $(".order-close").click(function(){
        $("#order-fapiao").css({display:'none'})
    })
    $(".order-save").click(function(){
        $("#order-fapiao").css({display:'none'})
    })
    $(".use-quan").click(function(){
        $("#order-packet").css({display:'none'})
        $("#order-quan").css({display:'block'})
        $(".use-quan").css({color: '#f8584f'})
        $(".use-packet").css({color: '#000'})
    })
    $(".use-packet").click(function(){
        $("#order-packet").css({display:'block'})
        $("#order-quan").css({display:'none'})
        $(".use-quan").css({color: '#000'})
        $(".use-packet").css({color: '#f8584f'})
    })

}