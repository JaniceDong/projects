window.onload = function () {
    //下拉刷新
    var oScroll = null;
    var oPullDown = null;
    var oPullUp = null;
    var oScrollContainer = null;
    var oPullData = null;

    setTimeout(function () {
        oPullDown = $("#pull-down");
        oPullUp = $("#pull-up");
        oScrollContainer = $("#scroll-container");
        oPullData = $("#pull-data");
        oScroll = new iScroll("scroll-container",{//scroll作用在scroll-container的子元素身上
            hScrollbar: false,//默认会在右边出现滚动条
            vScrollbar: false,
            topOffset:oPullDown.height(),
            onScrollMove: function () {
                if(this.y > 5&& !oPullDown.hasClass("active")){
                    oPullDown.addClass("active").html("松手刷新页面");
                    this.minScrollY = 0;
                }else if(this.y < 5 && oPullDown.hasClass("active")){
                    oPullDown.removeClass("active").html("下拉刷新");
                }else if(this.y<this.maxScrollY&&!oPullUp.hasClass("active")){
                    oPullUp.addClass("active").html("松手加载数据");

                }else if(this.y>=this.maxScrollY&&oPullUp.hasClass("active")){
                    oPullUp.removeClass("active").html("上拉加载");
                }
            },
            onScrollEnd: function () {
                if(oPullDown.hasClass("active")){
                    oPullDown.html("Loading...");
                    pullDownData();
                }else if(oPullUp.hasClass("active")){
                    oPullUp.html("Loading...");
                    pullUpData();
                }
            },
            onRefresh: function () {
                if(oPullDown.hasClass("active")){
                    oPullDown.removeClass("active").html("下拉刷新");
                    console.log(1);
                }else if(oPullUp.hasClass("active")){
                    oPullUp.removeClass("active").html("上拉加载");
                    console.log(2);
                }
            }
        });
        //console.log(oScroll);
        setTimeout(function () {//页面刷新下拉刷新也会出来，因此可设置200ms以后显示ScrollContainer，此时动画已经做完
            oScrollContainer.css({left:0});
        },200);
    },100);

    //下拉刷新，，加载新的数据
    function pullDownData(){
        $.ajax({
            url:'http://localhost/1609/day--1027/zxiu/save.php',
            //url:"http:zxiu.php",
            dataType:"json",//不写数据类型，默认为字符串类型
            success: function (data) {
                data.forEach(function (v,k){
                    oPullData.prepend('<li><p class="left"><a href="javascript:;"><img src="'+ v.url+'" alt="28880土耳其世纪玫瑰浪漫之旅"></a> </p><div class="right"><p>'+ v.title+'</p><p>'+ v.title1+'</p><p><span class="iconfont price">'+ v.price+'</span><span class="discount"><del>'+ v.discountprice+'</del></span></p> <span>'+ v.discount+'</span><p class="cart"><span class="iconfont">&#xe685;</span></p><p class="del"><span class="iconfont">&#xe615;</span></p> </div></li>');
                });
                //console.log(data);
                oScroll.refresh();
            }
        });
    }
    function pullUpData(){
        $.ajax({
            url:'http://localhost/1609/day--1027/zxiu/save.php',
            //url:"http:zxiu.php",
            dataType:"json",//不写数据类型，默认为字符串类型
            success: function (data) {
                data.forEach(function (v,k){
                    oPullData.append('<li><p class="left"><a href="javascript:;"><img src="'+ v.url+'" alt="28880土耳其世纪玫瑰浪漫之旅"></a> </p><div class="right"><p>'+ v.title+'</p><p>'+ v.title1+'</p><p><span class="iconfont price">'+ v.price+'</span><span class="discount"><del>'+ v.discountprice+'</del></span></p> <span>'+ v.discount+'</span><p class="cart"><span class="iconfont">&#xe685;</span></p><p class="del"><span class="iconfont">&#xe615;</span></p> </div></li>');
                });
                console.log(data);
                oScroll.refresh();
            }
        });
    }

}
