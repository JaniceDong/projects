/**
 * Created by Administrator on 2016/9/27.
 */
$(function(){
    var imgList = $("#big-img img");
    var smallList = $("#list li");
    var bigList = $("#bigger img");
    var maxX = $("#big-img").width() - $("#mouse").width();
    var maxY = $("#big-img").height() - $("#mouse").height();
    var scale = $("#bigger").width()/$("#mouse").width();
    smallList.mouseenter(function(){
        var iIndex = $(this).index();
        smallList.removeClass("list-first").eq(iIndex).addClass("list-first");
        imgList.css({display:'none'}).eq(iIndex).css({display:'block'});
        bigList.css({display:'none'}).eq(iIndex).css({display:'block'});
    })
    $("#big-img").mousemove(function(ev){
        var x = ev.clientX - $("#big-img").offset().left - $("#mouse").width()/2;
        var y = ev.clientY - $("#big-img").offset().top - $("#mouse").height()/2;
        if (x<0){
            x = 0;
        }
        if(x>maxX){
            x = maxX;
        }
        if(y<0){
            y = 0;
        }
        if(y>maxY){
            y = maxY;
        }
        $("#mouse").css({left :x + 'px'});
        $("#mouse").css({top : y + 'px'});
        $("#bigger img").css({left:-x*scale + 'px'});
        $("#bigger img").css({top:-y*scale + 'px'});
    })
    $("#big-img").mouseenter(function(){
        $("#mouse").css({display:'block'})
        $("#bigger").css({display:'block'})
    })
    $("#big-img").mouseleave(function(){
        $("#mouse").css({display:'none'})
        $("#bigger").css({display:'none'})
    })
    $(".vip").mouseenter(function(){
        $(".open").css({display:'block'})
    })
    $(".vip").mouseleave(function(){
        $(".open").css({display:'none'})
    })
    $(".sizeSelecteHelper").click(function(){
        $(".size-box").css({display:'block'}).animate({height:'20px'},500)
    })
    $(".sizeSelecteHelper").mouseleave(function(){
        $(".size-box").animate({height:'0'},500,function(){
            $(".size-box").css({display:'none'})
        })
    })
    //商品颜色选择
    var obtn = true;
    $("#color_01").click(function(){
        if(obtn){
            $("#shop-color").text("白色")
            $("#color_01").css({border:'2px #F8584F solid',padding:'0'})

        }else {
            $("#shop-color").text("请选择颜色");
            $("#color_01").css({border:'1px #DCDCDC solid',padding:"1"})
        }
        obtn = ! obtn;
    })
    //商品大小选择
    $("#size_452").click(function(){
        if(obtn){
            $("#sizeSelected").text("160/80A");
            $("#size_452").mouseleave(function(){
                $("#size_452").css({border: '2px #F8584F solid',padding:'4'})
            })
        } else {
            $("#sizeSelected").text("请选择尺码");
            $("#size_452").mouseleave(function(){
                $("#size_452").css({border: '1px #DCDCDC solid',padding:'5'})
            })
        }
        obtn = ! obtn;
    })
    //商品数量选择
    $(".less").click(function(){
        var a = $(".buynum").val();
        a--;
        $(".buynum").val(a);
        if(a<1){
            $(".buynum").val(1);
            $(".minmax-num").text("对不起，数量最少为1件").css({display:'block'})
            setTimeout(function(){
                $(".minmax-num").css({display:'none'})
            },3000)
        }
    })
    $(".add").click(function(){
        var b = $(".buynum").val();
        b++;
        $(".buynum").val(b);
        if(b>50){
            $(".buynum").val(50);
            $(".minmax-num").text("对不起，数量最多为50件").css({display:'block'})
            setTimeout(function(){
                $(".minmax-num").css({display:'none'})
            },3000)
        }
    })
    //分享
    $(".share_txt").mouseenter(function(){
        $(".share-box").css({display:'block'})
    })
    $(".share").mouseleave(function(){
        $(".share-box").css({display:'none'})
    })
    $(".box-more").mouseenter(function(){
        $("#bdshare_popup_box").css({display:'block'})
    })
    $("#bdshare_popup_box").mouseleave(function(){
        $("#bdshare_popup_box").css({display:'none'})
    })

    $(window).scroll(function(){
        if($(window).scrollTop()>870){
            $(".fix-left").css({display:'block'});
            $(".fix-right").css({display:'block'});
            $(".news-list").addClass("news-fix").css({display:'padding-left:120px;'});
        }
        if($(window).scrollTop()<870){
            $(".fix-left").css({display:'none'});
            $(".fix-right").css({display:'none'});
            $(".news-list").removeClass("news-fix").css({display:'padding-left:0px;'});
        }
    })
    var Itimer = null;
    $("#list1").mouseenter(function(){
        $("#nav_box1").css({display:'block'})
    })
    $("#list1").mouseleave(function(){
        Itimer = setTimeout(function(){
            $("#nav_box1").css({display:'none'})
        },100);
    })
    $("#nav_box1").mouseenter(function(){
        clearTimeout(Itimer)
    })




    //加入购物车
    $(".shop-join").click(function(){
        $("#open-shop").css({display:'block'})
    })
    $(".open-close").click(function(){
        $("#open-shop").css({display:'none'})
    })
    //购物车
    var A1 = $(".open-btnGoPay")
    A1.click(function () {
        $("#open-shop").css({display:'none'});
        $(".open-btnGoPay").attr({href : "shop.html"});
        var Gname 	= $(this).attr('name'),
            Gimg     = $(this).attr('img'),
            Gprice   = $(this).attr('price'),
            GshopNum = $(this).attr('shop-num'),
            Gcolor 	= $(this).attr('color'),
            Gsize 	= $(this).attr('size'),
            Gyuanjia = $(this).attr('yuanjia'),
            Gid = $(this).attr('data-id');
        var Index = $(".buynum").index($(this));
        var Gnumber = parseInt($(".buynum").eq(Index).val());
        var sGoods = getCookie('goods');
        var flag = true;
        if(sGoods === undefined) {
            var aGoods = [];
        } else {
            var aGoods = JSON.parse(sGoods);
        }

        for(var i =0; i < aGoods.length; i++) {
            if(aGoods[i].gId == Gid){
                aGoods[i].number = parseInt(parseInt(aGoods[i].number) + parseInt(Gnumber));
                console.log(typeof(Gnumber))
                flag = false;
            }
        }
        if(flag) {
            var oGoods={
                name: 	Gname,
                img: Gimg,
                price: Gprice,
                shopNum: 	GshopNum,
                color :   Gcolor,
                size: 	Gsize,
                number: Gnumber,
                yuanjia : Gyuanjia,
                gId : Gid
            };
            aGoods.push(oGoods);
        };
        setCookie('goods', JSON.stringify(aGoods), 7, '/');
    })

})