(function ($) {
    $(function () {
//banner左侧栏
        var oUl = $(".wrap .main-con");
        var oLi = $(".wrap .main-con li");
        var oCate = $(".wrap .main-con .category");
        var iIndex = 0;
        var oImg = $(".wrap .con2 li");//banner图片轮播
        var oConUl = $(".wrap .con2 ul");
        var iIndexImg = 0;//图片轮播索引
        var oCon2 = $(".wrap .con2");
        var oDirBtn = $(".wrap .con2 .dir-btn");
        var oRightBtn = $(".wrap .con2 .right-btn");
        var oLeftBtn = $(".wrap .con2 .left-btn");
        var oListBtn = $(".wrap .list-btn a");
        var oLiB = $(".tbuy .cb li");
        var oI = $(".tbuy .cb i");
        var oA = $(".content .cb ul li a");
        var iIndexBorder = 0;

        var bBtn = true;
        var bTn = true;

        var iTimer = null;
        oLi.mouseenter(function () {
            iIndex = $(this).index();
            oLi.removeClass("select").eq(iIndex).addClass("select");
            oCate.css({display:"none"}).eq(iIndex).css({display:"block"});
        });
        oLi.mouseleave(function () {
            oLi.eq(iIndex).removeClass("select");
            oCate.css({display:"none"});
        });

         iTimer = setInterval(function () {
             move();
         },3000);//定时器

        //鼠标移入banner
        oCon2.mouseenter(function () {
            clearInterval(iTimer);
            oDirBtn.css({display:"block"});
        });
        //鼠标移出banner
        oCon2.mouseleave(function () {
            oDirBtn.css({display:"none"});
            iTimer = setInterval(function () {
                move();
            },3000);
        });
        //右按钮
        oRightBtn.click(function () {
            move();
        });

        //左边按钮
        oLeftBtn.click(function () {
               if(bBtn){
                   bBtn = false;
                   iIndexImg -- ;
                   if(iIndexImg < 0 ){
                       oConUl.css({left:-2220}, function () {
                           oConUl.stop(true).animate({left:-2220});//图片长度 - 2
                       });
                       iIndexImg = 2; // 图片长度 - 3
                   }
                   oConUl.stop(true).animate({left:-iIndexImg * 740},1000, function () {
                       bBtn = true;
                       oListBtn.removeClass("active").eq(iIndexImg).addClass("active");

                   });
               }
        });

        //鼠标滑过按钮
        oListBtn.mouseenter(function () {
            bBtn = true;
            iIndexImg = $(this).index();
            iIndexImg --;
            move();
            oListBtn.removeClass("active").eq(iIndexImg).addClass("active");
        });

//鼠标滑过图片图片有下划线
        oLiB.mouseenter(function () {
            iIndexBorder = $(this).index();
            oI.removeClass("border").eq(iIndexBorder).addClass("border");
            oA.eq(iIndexBorder).css({borderColor:"#ededed"});
        });
        oLiB.mouseleave(function () {
            oI.eq(iIndexBorder).removeClass("border");
            oA.eq(iIndexBorder).css({borderColor:"#fff"});
        });

        function move(){
            if(bBtn){
                bBtn = false;
                iIndexImg ++;
                oConUl.stop(true).animate({left:-iIndexImg * 740},1000, function () {
                    bBtn = true;
                    if(iIndexImg > 2){
                        oConUl.css({left:0}).stop(true).animate({left:0});
                        iIndexImg = 0;
                    }
                    oListBtn.removeClass("active").eq(iIndexImg).addClass("active");
                });
            }

        }

        //var oWideLi = $(".figure-list .wide ul li");
        var oWideUl = $(".f1 .figure-list .wide ul");
        var oWideUl1= $(".f2 .figure-list .wide ul");
        var oWideUl2 = $(".f3 .figure-list .wide ul");
        var oWideUl3= $(".f4 .figure-list .wide ul");


        var oWide = $(".f1 .figure-list .wide");
        var oWide1 = $(".f2 .figure-list .wide");
        var oWide2 = $(".f3 .figure-list .wide");
        var oWide3 = $(".f4 .figure-list .wide");

        var oWLeftBtn = $("#left-btn");
        var oWLeftBtn1 =$("#left-btn1");
        var oWLeftBtn2 =$("#left-btn2");
        var oWLeftBtn3 =$("#left-btn3");

        var oWRightBtn = $("#right-btn");
        var oWRightBtn1 = $("#right-btn1");
        var oWRightBtn2 = $("#right-btn2");
        var oWRightBtn3 = $("#right-btn3");

        var oFocus = $("#focus-switch a");
        var oFocus1 = $("#focus-switch1 a");
        var oFocus2 = $("#focus-switch2 a");
        var oFocus3 = $("#focus-switch3 a");

        var  timer = null;
        var timer1 = null;
        var timer2 = null;
        var timer3= null;

        var indexWide = 0;
        var index1 = 0;
        var index2 = 0;
        var index3 = 0

        var bBtn1 = true;
        var bBtn2 = true;
        var bBtn3 = true;

        timer = setInterval(function () {
            move1();
        },3000);
        timer1 = setInterval(function () {
            move2();
        },3000);
        timer2 = setInterval(function () {
            move3();
        },3000);
        timer3 = setInterval(function () {
            move4();
        },3000);

        //鼠标移入banner
        oWide.mouseenter(function () {
            clearInterval(timer);
            oWRightBtn.css({display:"block"});
            oWLeftBtn.css({display:"block"});
        });
        oWide1.mouseenter(function () {
            clearInterval(timer1);
            oWRightBtn1.css({display:"block"});
            oWLeftBtn1.css({display:"block"});
        });
        oWide2.mouseenter(function () {
            clearInterval(timer2);
            oWRightBtn2.css({display:"block"});
            oWLeftBtn2.css({display:"block"});
        });
        oWide3.mouseenter(function () {
            clearInterval(timer3);
            oWRightBtn3.css({display:"block"});
            oWLeftBtn3.css({display:"block"});
        });
        //鼠标移出banner
        oWide.mouseleave(function () {
            oWRightBtn.css({display:"none"});
            oWLeftBtn.css({display:"none"});
            timer = setInterval(function () {
                move1();
            },3000);
        });
        oWide1.mouseleave(function () {
            oWRightBtn1.css({display:"none"});
            oWLeftBtn1.css({display:"none"});
            timer1 = setInterval(function () {
                move2();
            },3000);
        });
        oWide2.mouseleave(function () {
            oWRightBtn2.css({display:"none"});
            oWLeftBtn2.css({display:"none"});
            timer2 = setInterval(function () {
                move3();
            },3000);
        });
        oWide3.mouseleave(function () {
            oWRightBtn3.css({display:"none"});
            oWLeftBtn3.css({display:"none"});
            timer3 = setInterval(function () {
                move4();
            },3000);
        });
        //右按钮
        oWRightBtn.click(function () {
            move1();
        });
        oWRightBtn1.click(function () {
            move2();
        });
        oWRightBtn2.click(function () {
            move3();
        });
        oWRightBtn3.click(function () {
            move4();
        });
        //左边按钮
        oWLeftBtn.click(function () {
            if(bTn){
                bTn = false;
                indexWide -- ;
                if(indexWide < 0 ){
                    oWideUl.css({left:-1257}, function () {
                        oWideUl.stop(true).animate({left:-1257});//图片长度 - 2
                    });
                    indexWide = 2; // 图片长度 - 3
                }
                oWideUl.stop(true).animate({left:-indexWide * 419}, function () {
                    bTn = true;
                    oFocus.removeClass("active").eq(indexWide).addClass("active");

                });
            }

        });
        oWLeftBtn1.click(function () {
            if(bBtn1){
                bBtn1 = false;
                index1 -- ;
                if(indexWide < 0 ){
                    oWideUl1.css({left:-1257}, function () {
                        oWideUl1.stop(true).animate({left:-1257});//图片长度 - 2
                    });
                    index1 = 2; // 图片长度 - 3
                }
                oWideUl1.stop(true).animate({left:-index1 * 419}, function () {
                    bBtn1 = true;
                    oFocus1.removeClass("active").eq(index1).addClass("active");

                });
            }

        });
        oWLeftBtn2.click(function () {
            if(bBtn2){
                bBtn2 = false;
                index2 -- ;
                if(indexWide < 0 ){
                    oWideUl2.css({left:-1257}, function () {
                        oWideUl2.stop(true).animate({left:-1257});//图片长度 - 2
                    });
                    index2 = 2; // 图片长度 - 3
                }
                oWideUl2.stop(true).animate({left:-index2 * 419}, function () {
                    bBtn2 = true;
                    oFocus2.removeClass("active").eq(index2).addClass("active");

                });
            }

        });
        oWLeftBtn3.click(function () {
            if(bBtn3){
                bBtn3 = false;
                index3 -- ;
                if(indexWide < 0 ){
                    oWideUl3.css({left:-1257}, function () {
                        oWideUl3.stop(true).animate({left:-1257});//图片长度 - 2
                    });
                    index3 = 2; // 图片长度 - 3
                }
                oWideUl3.stop(true).animate({left:-index3 * 419}, function () {
                    bBtn3 = true;
                    oFocus3.removeClass("active").eq(index3).addClass("active");

                });
            }

        });
        //鼠标滑过按钮
        oFocus.mouseenter(function () {
            indexWide = $(this).index();
            indexWide --;
            move1();
            oFocus.removeClass("active").eq(indexWide).addClass("active");
        });
        oFocus1.mouseenter(function () {
            index1 = $(this).index();
            index1 --;
            move2();
            oFocus1.removeClass("active").eq(index1).addClass("active");
        });
        oFocus2.mouseenter(function () {
            index2 = $(this).index();
            index2 --;
            move3();
            oFocus2.removeClass("active").eq(index2).addClass("active");
        });
        oFocus3.mouseenter(function () {
            index3 = $(this).index();
            index3 --;
            move4();
            oFocus3.removeClass("active").eq(index3).addClass("active");
        });

        function move1(){
            if(bTn){
                bTn = false;
                indexWide ++;
                oWideUl.animate({left:-indexWide * 419}, function () {
                    bTn = true;
                    if(indexWide > 2){
                        oWideUl.css({left:0}).stop(true).animate({left:0});
                        indexWide = 0;
                    }
                    oFocus.removeClass("active").eq(indexWide).addClass("active");
                });
            }
        }
        function move2(){
            if(bBtn1){
                bBtn1 = false;
                index1 ++;
                oWideUl1.animate({left:-index1 * 419}, function () {
                    bBtn1 = true;
                    if(index1 > 2){
                        oWideUl1.css({left:0}).stop(true).animate({left:0});
                        index1 = 0;
                    }
                    oFocus1.removeClass("active").eq(index1).addClass("active");
                });
            }
        }
        function move3(){
            if(bBtn2){
                bBtn2 = false;
                index2 ++;
                oWideUl2.animate({left:-index2 * 419}, function () {
                    bBtn2 = true;
                    if(index2 > 2){
                        oWideUl2.css({left:0}).stop(true).animate({left:0});
                        index2 = 0;
                    }
                    oFocus2.removeClass("active").eq(index2).addClass("active");
                });
            }
        }
        function move4(){
            if(bBtn3){
                bBtn3 = false;
                index3 ++;
                oWideUl3.animate({left:-index3 * 419}, function () {
                    bBtn3 = true;
                    if(index3 > 2){
                        oWideUl3.css({left:0}).stop(true).animate({left:0});
                        index3 = 0;
                    }
                    oFocus3.removeClass("active").eq(index3).addClass("active");
                });
            }
        }
        //鼠标滑过，显示图层
        var indexI = 0;
        $(".content .indiana .indiana-list li").mouseenter(function () {
            indexI = $(this).index();
            $(".content .indiana .indiana-list li .pic .text").eq(indexI).css({backgroundColor:"#fff"});
            $(".content .indiana .indiana-list li .show").eq(indexI).css({display:"block"});
        });
        $(".content .indiana .indiana-list li").mouseleave(function () {
            $(".content .indiana .indiana-list li .pic .text").eq(indexI).css({backgroundColor:"#000"});
            $(".content .indiana .indiana-list li .show").eq(indexI).css({display:"none"});
        });

//侧边栏 购物车数量css的变化
        var index5 = 0;
$(".topbar .tab-ico").mouseenter(function () {
    index5 = $(".tab-ico").index($(this));
    if(index5 == 2){
        $(".topbar .cart .number").css({background:"#fff",color:"#f00"});
    };
    $(".topbar em").eq(index5).stop(true).animate({right:37});
});
        $(".topbar .tab-ico").mouseleave(function () {
            if(index5 == 2){
                $(".topbar .cart .number").css({background:"#f00",color:"#fff"});
            };
            $(".topbar em").eq(index5).stop(true).animate({right:-33});
        });


//模态窗口
        $(".topbar .tab-ico").click(function () {
            $("#all").css({display:"block"});
            $("#box").css({display:"block",left:"50%",top:"50%",marginTop:-185,marginLeft:-125});
            $("#tx").focus();

        });
        //头部买家中心
        $(".topr .shop .center").mouseenter(function () {
            $(".topr .shop .cen").css({display:"block"});
        });
        $(".topr .shop .center").mouseleave(function () {
            $(".topr .shop .cen").css({display:"none"});
        });
        //左侧图标显示隐藏
        $(".topr .mobile ").mouseenter(function () {
            $(".topr .mobile .img").css({display:"block"});
        });
        $(".topr .mobile ").mouseleave(function () {
            $(".topr .mobile .img").css({display:"none"});
        });


        var index7 = 0;
        $(".m .text").focus(function () {
            index7 = $(".m .text").index($(this));
            console.log($(".m .text").length);
            console.log(index7);
            $(".m .text").eq(index7).css({borderColor:"red"});
        });
        $(".m .text").blur(function () {
            $(".m .text").eq(index7).css({borderColor:"#ccc"});
        });


        //点击按钮取消模态框
    $(".login i").click(function () {
        $("#all").css({display:"none"});
        $("#box").css({display:"none"});
    });

//返回顶部
        $(".btobar .getback").click(function () {
            $(document).scrollTop(0);
        });
//吸顶
        $(window).scroll(function () {
            var scrollTop = $(document).scrollTop();
            if (scrollTop > 590 && 8000>scrollTop) {
                //console.log(scrollTop);
                $("#header").addClass("fix");
            } else {
                $("#header").removeClass("fix");
            }
        });

        $("#research").mouseenter(function () {
            $("#research").css({left:0});
        });
        $("#research").mouseleave(function () {
            $("#research").css({left:-29});
        });

        var index8 =0 ;
       $(".figure-list .item  .pic").mouseenter(function () {
            index8 = $(".pic").index($(this));
           $(".figure-list .item  .pic img").eq(index8).stop(true).animate({marginTop:-10});
       });
        $(".figure-list .item  .pic").mouseleave(function () {
            $(".figure-list .item  .pic img").eq(index8).stop(true).animate({marginTop:0});
        });


        //getCookie("密码:");
        //console.log(getCookie("手机号:"));//15036289830

       if(getCookie('is_login') == 1) {
           var textValue = getCookie("手机号:");

           $("#topbar .top .user").text(textValue);

           $("#topbar .top .dl").text("退出");
           $("#topbar .top .register").text("");
       }


        $("#topbar .top .dl").click(function () {
            removeCookie('is_login', '/');
            $("#topbar .top .user").text("欢迎来到ZOL商城，");
            $("#topbar .top .dl").text("请登录");
            location.href = "../html/index.html";
        });


        var
            sGoods = getCookie('goods-cart'),
            aGoods = sGoods ? JSON.parse(sGoods) : [];//0不是有效的json格式数据，如果数据取到为0，则aGoods为空
        $(".goodsNum").text(aGoods.length ? aGoods[0].goodsNum : 0);
        console.log($(".goodsNum"));



    });

    function getCookie(name) {
        var aCookie = document.cookie.split('; ');
        for(var i =0; i < aCookie.length; i++) {
            var aTemp = aCookie[i].split('=');
            if(aTemp[0] === name) {
                return decodeURIComponent(aTemp[1]);
            }
        }
    }
})(jQuery);
