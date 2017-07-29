(function ($) {
    $(function () {
     /*   $("#text")[0].oninput = function () {
            $.ajax({
                url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+ $('#text')[0].value+'&json=1&p=3&sid=1421_20972_17948_21120_18560_20691_20885&req=2&csor=1&',
                async:false,
                jsonp:"cb",
               dataType:"jsonp",
                success: function (data) {
                    var XHTML = "";
                    var oUL = $("#search-list");
                    for(var i=0;i<data.s.length;i++){
                        XHTML += "<li><a href='javascript:;'>" + data.s[i]+"</a></li>";
                    }
                    oUL.html(XHTML);
                    var index = -1;
                    var oULLi = $("#search-list li");
                    $("#text").keydown(function (evt) {
                        var event = evt || window.event;
                        if(oULLi.length &&(event.keyCode === 38) ||(event.keyCode ===40)){
                            if(event.keyCode === 38){
                                index --;
                                if(index <0){
                                    index = oULLi.length - 1;
                                }
                            }else{
                                index ++;
                                if(index == oULLi.length){
                                    index  = 0;
                                }
                            }
                            oULLi.removeClass("active").eq(index).addClass("active");
                            $("#text")[0].value = oULLi[index].innerText;
                            return false;
                        }
                    });

                    oULLi.mouseenter(function () {
                        index = $(this).index();
                        oULLi.removeClass("active").eq(index).addClass("active");
                    });

                    oULLi.click(function () {
                        index = $(this).index();
                        $("#text")[0].value = oULLi[index].innerText;
                    });
                }
            });
        }*/
        $('#text').bind('input propertychange', function() {
            if ($(this).val() !== '') {
                //getJSON也能拿到数据
                ///百度跨域网址：https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?json=1&p=3&sid=1444_20795_21119_21193_21161_20927&req=2&csor=1&cb=jQuery110203465146032214528_1475637049128&_=1475637049131
                $.getJSON(
                    'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?json=1&p=3&req=2&csor=1&cb=?',
                    {wd: $(this).val()},
                    function (data) {
                        var XHTML = "";
                        var oUL = $("#search-list");
                        data.s.forEach(function (v, k) {//k为下标 v为值
                            XHTML += '<li><a href="javascript:;">' + v + '</a></li>';
                        });
                        oUL.html(XHTML);
                        var index = -1;
                        var oULLi = $("#search-list li");
                        oULLi.mouseenter(function () {
                            index = $(this).index();
                            oULLi.removeClass("active").eq(index).addClass("active");
                        });

                        oULLi.click(function () {
                            index = $(this).index();
                            $("#text").val(oULLi.eq(index).text());
                        });
                        $("#text").keydown(function (evt) {
                            var event = evt || window.event;
                            if(oULLi.length &&(event.keyCode === 38) ||(event.keyCode ===40)){
                                if(event.keyCode === 38){
                                    index --;
                                    if(index <0){
                                        index = oULLi.length - 1;
                                    }
                                }else{
                                    index ++;
                                    if(index == oULLi.length){
                                        index  = 0;
                                    }
                                }
                                oULLi.removeClass("active").eq(index).addClass("active");
                                $("#text").val(oULLi.eq(index).text());
                                return false;
                            }
                        });

                    }
                );
            }
        });


    });
})(jQuery);
