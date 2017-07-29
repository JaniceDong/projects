window.onload = function () {
        var oBox = $("#box");
        var oLoading = $("#loading");
        var aPanel = $("#box .panel");

        var iColNum = 3;
        var iPanelW = 260;
        var aColH = [];
        var iLoadingH = 30;
        var iWindowH = $(window).height();
        var iWindowW = $(window).width();
        var bBtn = true;
        //页面初始布局
        aPanel.each(function (k,v) {
            if(k<iColNum){
                $(v).css({
                    left:iPanelW * k,
                    top:0
                });
                aColH.push($(v).height());
            }else{
                var iMink = 0;
                var iMinH = Math.min.apply(null,aColH);

                aColH.forEach(function (v,k) {
                    if(v === iMinH){
                        iMink = k;
                    }
                });
                $(v).css({
                    left:iPanelW * iMink,
                    top:iMinH
                });
                aColH[iMink] += $(v).height();
            }
        });

        $(window).scroll(function () {
           var iScrollTop =  $(window).scrollTop();
           // var iScrollTop1 = document.documentElement.scrollTop || document.body.scrollTop;

            var oLastPanel = aPanel.eq(aPanel.length - 1);
            var iCritical = parseInt(oLastPanel.css("top")) +oLastPanel.height() - iLoadingH;
            if(bBtn && (iWindowH + iScrollTop >= iCritical)){
                $.ajax({
                    url:"http://localhost/waterfall.php",
                    dataType:"JSON",
                    beforeSend: function () {
                        bBtn = false;
                        //console.log("开始加载");
                        oLoading.css({
                            display:'block',
                            left:(iWindowW - iLoadingH)/2,
                            top:iCritical
                        });
                        console.log(iWindowW - iLoadingH);
                    },
                    success: function (data) {
                        data.forEach(function (v,k) {
                            oBox.append('<div class="panel"><a href="javascript:;"><img src="' + v.url + '" alt=""></a></div>');

                            var iMink = 0;
                            var iMinH = Math.min.apply(null,aColH);

                            aColH.forEach(function (v,k) {
                                if(v === iMinH){
                                    iMink = k;
                                }
                            });

                            var oLast = oBox.find(".panel").last();
                            oLast.css({
                                left:iMink * iPanelW,
                                top:iMinH,
                                opacity:0
                            }).animate({
                                opacity:1
                            },1000);
                            aColH[iMink] += oLast.height();
                        });
                    },
                    complete: function () {
                        aPanel = $("#box .panel");
                        bBtn = true;
                        oLoading.css({
                            display:"none"
                        });
                    }
                })
            }
        });

    }