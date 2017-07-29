window.onload = function () {
    var oBox = $("box");
    var oImageList = $("image-list");
    var aImageListLi = byTagName(oImageList,"li");
    var oBtnList = $("btn-list");
    var iLiWidth = aImageListLi[0].offsetWidth;
    var aBtnListA = byTagName(oBtnList,"a");
    var oDirctionBtn = $("direction-btn");
    var oLeftBtn = $("left-btn");
    var oRightBtn = $("right-btn");
    var index  = 0;
    var bBtn = true;
    var timer = null;
    //复制第一张图片加到最后
    oImageList.innerHTML = oImageList.innerHTML + aImageListLi[0].outerHTML;
   // 更新oImageList的长度
    setStyle(oImageList,{width:aImageListLi.length * iLiWidth + "px"});
    //给每个按钮添加enter事件
    for(var i= 0,len = aBtnListA.length;i<len;i++){
        aBtnListA[i].index = i;
        aBtnListA[i].onmouseenter = function () {
            index = this.index;//更改索引值
            buffermove();//当期索引值下的类名为active
        }
    }
    //给box添加mouseenter事件
    oBox.onmouseenter = function () {
        clearInterval(timer);
        setStyle(oDirctionBtn,{display:"block"});
    }
    //给box添加mouseleave事件
    oBox.onmouseleave = function () {
        timer = setInterval(move,3000);
        setStyle(oDirctionBtn,{display:"none"});
    }
    //给left添加事件
    oLeftBtn.onclick = function () {
        if(bBtn){
           bBtn = false;
           index --;
           if(index < 0){
              index = aImageListLi.length - 2;
              setStyle(oImageList,{left:-(aImageListLi.length - 1) * iLiWidth + "px"});
            }
            buffermove();
        }
    }
    oRightBtn.onclick = function () {
        move();
    }
    //自动轮播
    timer = setInterval(move,3000);
    function buffermove(){
        bufferMove(oImageList,{left:-index * iLiWidth}, function () {
            bBtn = true;
        });
        for(var j = 0;j<len;j++){
            aBtnListA[j].className = "";
        }
        aBtnListA[index].className = "active";
    }
    function move() {
        if(bBtn){
            bBtn = false;
            index ++;
            if(index > aImageListLi.length -1){//当显示到最后一张图片时
                setStyle(oImageList,{left:0});
                index = 1;//最后一张和第一张是相同的，所以接下来显示第二张
            }
            bufferMove(oImageList,{left:-index * iLiWidth}, function () {
                bBtn = true;
            });
            for(var j=0;j<len;j++){
                aBtnListA[j].className = "";
            }
            if(index == aImageListLi.length -1){
                aBtnListA[0].className = "active";
            }else{
                aBtnListA[index].className = "active";
            }
        }
    }
}


function $(id){
    return document.getElementById(id);
}
function setStyle(obj,oTarget){
    for(var sAttr in oTarget){
        obj.style[sAttr] = oTarget[sAttr];
    }
}
function byTagName(obj,sTagName){
    return obj.getElementsByTagName(sTagName);
}