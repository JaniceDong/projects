(function($){
    $(function(){
        if($.cookie("666") == 1){
            $(".text1").text($.cookie("use-name"))
            $(".box1").css({display:'none'})
            $(".text2").attr({"href":"javascript:;"}).text("[退出]")
            $(".text2").click(function(){
            $.removeCookie("666");
            $.cookie("666","2");
            location.href = "banggou.html";
        })
        }
        if($.cookie("666") == 2){
            $(".text2").attr({"href":"entry.html"}).text("登陆")
            $(".text1").attr({"href":"enroll.html"}).text("注册")
        }

        $(".text1").mouseenter(function(){
            $(".box1").css({display:'block'})
        })
        $(".right1").mouseleave(function(){
            $(".box1").css({display:'none'})
        })
        $(".text3").mouseenter(function(){
            $(".box2").css({display:'block'})
        })
        $(".right3").mouseleave(function(){
            $(".box2").css({display:'none'})
        })
        $(".down").mouseenter(function(){
            $(".box3").css({display:'block'})
        })
        $(".right4").mouseleave(function(){
            $(".box3").css({display:'none'})
        })
        $(".wx").mouseenter(function(){
            $(".wx_box").css({display:'block'})
        })
        $(".wx").mouseleave(function(){
            $(".wx_box").css({display:'none'})
        })
        var form = $("#search-form");
        var text = $("#search-content");
        var btn = $("#search-btn");
        var list = $("#search-list");
        var Index = 0;
        var Timer = null;
        text.bind("input",function(){
            $("#search-list li").remove();
            $.ajax({
                url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd= "+ text.val() +"&json=1&p=3&sid=1433_20972_21100_20719&req=2&sc=eb&csor=0&_=1473755572629",
                dataType: 'jsonp',
                jsonp: 'cb',
                jsonpCallback: 'get',
                success: function(data){
                    for(var i=0;i<data.s.length;i++){
                        list.append("<li>"+ data.s[i] +"</li>");
                    }
                    console.log(data)
                }
            })
        });
        list.on("mouseenter","li",function(){
            $("#search-list li").removeClass("active");
            $(this).addClass("active");
        })
        text.keydown(function(evevt){
            if(evevt.keyCode == 38){
                Index --;
                if(Index < 0) {
                    Index = $("#search-list li") - 1;
                }
            }
            if(evevt.keyCode == 40){
                Index ++;
                if(Index > $("#search-list li") -1) {
                    Index = 0;
                }
            }
            $("#search-list li").removeClass("active");
            $("#search-list li").eq(Index).addClass("active");

        })
        $("#banner").mouseenter(function(){
            clearInterval(Timer);
            $("#change").css({display:'block'})
        })
        $("#banner").mouseleave(function(){
            Timer = setInterval(function(){
                Index++;
                if(Index>4){
                    Index = 0;
                }
                $("#ban-list li").removeClass('b-first');
                $("#ban-list li").eq(Index).addClass('b-first');
                $("#banner img").removeClass('s-first').fadeOut(500).eq(Index).fadeIn(500);
            },2000)
            $("#change").css({display:'none'})
        })
        $("#change-left").click(function(){
            Index--;
            if(Index<0){
                Index = 4;
            }
            $("#ban-list li").removeClass('b-first');
            $("#ban-list li").eq(Index).addClass('b-first');
            $("#banner img").removeClass('s-first').fadeOut(500).eq(Index).fadeIn(500);
        })
        $("#change-right").click(function(){
            Index++;
            if(Index>4){
                Index = 0;
            }
            $("#ban-list li").removeClass('b-first');
            $("#ban-list li").eq(Index).addClass('b-first');
            $("#banner img").removeClass('s-first').fadeOut(500).eq(Index).fadeIn(500);
        })
        Timer = setInterval(function(){
            Index++;
            if(Index>4){
                Index = 0;
            }
            $("#ban-list li").removeClass('b-first');
            $("#ban-list li").eq(Index).addClass('b-first');
            $("#banner img").removeClass('s-first').fadeOut(500).eq(Index).fadeIn(500);
        },2000)
        $(".shop-left").click(function(){
            $(".hot-main ul").animate({left:0},1000)
        })
        $(".shop-right").click(function(){
            $(".hot-main ul").animate({left:-1200},1000)
        })
        $(".menu-list").mouseenter(function(){
            $(this).find(".nav-wrap").css({display:'block'})
        })
        $(".menu-list").mouseleave(function(){
            $(this).find(".nav-wrap").css({display:'none'})
        })

        $("img").mouseenter(function(){
            var oindex = $("img").index($(this))
            $("img").eq(oindex).animate({opacity:'0.6'})
        })
        $("img").mouseleave(function(){
            var oindex = $("img").index($(this))
            $("img").eq(oindex).animate({opacity:'1'})
        });






        $(window).scroll(function(){
            if($(window).scrollTop()>900){
                $(".top").css({display:'block'})
            }
            if($(window).scrollTop()<900){
                $(".top").css({display:'none'})
            }
        })
        $(".top").click(function(){
            $( "html,body").animate({ "scrollTop" : 0 }, 200);
        })




























    })
})(jQuery)
