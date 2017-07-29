window.onload = function () {
    var oBox = $("box");
    var aPanel = getClass(oBox,"panel");
    var iPanelW = 260;
    var iImgW = 220;
    var aColH = [];//记录每列的高度
    var iClientW = document.documentElement.clientWidth;
    var iClientH = document.documentElement.clientHeight;
    var iColNum = Math.floor(iClientW / iPanelW);//浏览器宽度改变时图片的列数
    var bBtn = true;


//设置box的宽度
    setStyle(oBox,{width:iPanelW * iColNum + "px"});
    //通过for循环给panel设置位置
    for(var i =0;i<aPanel.length;i++){
        if(i<iColNum){//设置第一排的位置
            setStyle(aPanel[i],{left:i * iPanelW + "px",top:0});
            aColH.push(aPanel[i].offsetHeight);
        }else{//
            var iMink = 0;
            var iMinH = aColH[0];
            //最小高度
            for(var j = 0;j<aColH.length;j++){//iMinH的长度跟iColNum的大小是一样的
                //查找最矮的那一列
                if(aColH[j] < iMinH){
                    iMink = j;
                    iMinH = aColH[j];
                }
            }
            setStyle(aPanel[i],{left:iMink * iPanelW + "px",top:iMinH + "px"});
            aColH[iMink] += aPanel[i].offsetHeight;//更新最小高度列的值，接下来再进行比较
        }
    }
    //改变窗口大小时触发
    window.onresize = function () {
        //初始化
        var aColH = [];//记录每列的高度
        var iClientW = document.documentElement.clientWidth;
        var iClientH = document.documentElement.clientHeight;
        var iColNum = Math.floor(iClientW / iPanelW);//浏览器宽度改变时图片的列数
        //设置box的宽度
        setStyle(oBox,{width:iPanelW * iColNum + "px"});
        //通过for循环给panel设置位置
        for(var i =0;i<aPanel.length;i++){
            if(i<iColNum){//设置第一排的位置
                bufferMove(aPanel[i],{left:i * iPanelW,top:0});
                aColH.push(aPanel[i].offsetHeight);
            }else{//
                var iMink = 0;
                var iMinH = aColH[0];
                //最小高度
                for(var j = 0;j<aColH.length;j++){//iMinH的长度跟iColNum的大小是一样的
                    //查找最矮的那一列
                    if(aColH[j] < iMinH){
                        iMink = j;
                        iMinH = aColH[j];
                    }
                }
                bufferMove(aPanel[i],{left:iMink * iPanelW,top:iMinH});

                aColH[iMink] += aPanel[i].offsetHeight;//更新最小高度列的值，接下来再进行比较
            }
        }
    }
    //滚动加载数据
    window.onscroll = function () {
        var oLastPanel = aPanel[aPanel.length - 1];
        //临界值
        var iCriticalP = oLastPanel.offsetTop + oLastPanel
                .offsetHeight / 2;
        var iScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(iScrollTop + iClientH > iCriticalP && bBtn){
            bBtn = false;
            ajax({
                url:"http://localhost/waterfall.php",
                dataType:"JSON",
                fn: function (oData) {
                    for(var i = 0;i < oData.length;i++){
                        var oNewPanel = document.createElement("div");
                        oNewPanel.className = "panel";
                        var oNewA = document.createElement("a");
                        oNewA.href = "javascript:;";
                        var oNewImg = document.createElement("img");
                        oNewImg.src = oData[i].url;

                        //设置图片宽度
                        //公式：iScaleW/iActualW = iScaleH/iActualH
                        var iScaleH = iImgW * oData[i].height/oData[i].width;

                        setStyle(oNewImg,{height:iScaleH + "px"});

                        oNewA.appendChild(oNewImg);
                        oNewPanel.appendChild(oNewA);
                        oBox.appendChild(oNewPanel);

                        //设置位置，假设第一列是最矮的
                        var iMink= 0;
                        var iMinH = aColH[0];//最小高度
                        for(var j = 1;j<aColH.length ;j++){
                            if(aColH[j] < iMinH){
                                iMink = j;
                                iMinH = aColH[j];
                            }
                        }
                        setStyle(oNewPanel,{left:(iClientW - iPanelW)/2 + "px",top:iScrollTop + iClientH + "px"});
                        bufferMove(oNewPanel,{left:iMink * iPanelW,top:iMinH});
                        //更新最矮的一列高度
                        aColH[iMink] += oNewPanel.offsetHeight;

                    }
                    //打开开关
                    bBtn = true;

                }
            });
        }
    }


}
function getStyle(obj, sAttr) {
    if(obj.currentStyle) {
        return obj.currentStyle[sAttr];
    } else {
        return getComputedStyle(obj, null)[sAttr];
    }
}
function $(id){
    return document.getElementById(id);
}
function getClass(obj,className){
   if(obj.getElementsByClassName){
       return obj.getElementsByClassName(className);
   }else{
       var aAllTag = obj.getElementsByTagName("*");
       var aClass = [];
       for(var i = 0,len = aAllTag.length;i<len;i++){
           if(aAllTag[i].className == className){
               aClass.push(aAllTag[i]);
           }
       }
       return aClass;
   }
}
function setStyle(obj,oTarget){
    for(var sAttr in oTarget){
        obj.style[sAttr] = oTarget[sAttr];
    }
}