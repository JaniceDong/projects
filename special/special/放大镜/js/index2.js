//js实现放大镜
window.onload= function () {
    var oMove = document.getElementById("move");//滑块

    var oBig = document.getElementById("big");
    var oBigA = getTagName(oBig,"a");

    var oLarge = document.getElementById("large");
    var oLargeA = getTagName(oLarge,"a");

    var oSmall = document.getElementById("small");
    var oSmallA = getTagName(oSmall,"a");

    var oMoveWidth = getStyle(oMove,"width");
    var oMoveHeight = getStyle(oMove,"height");
    console.log(oMoveWidth);
    //console.log(oMove.style.width);///只能获取内联样式的宽
    //console.log(oMove.clientWidth);//只有当元素为block时才能获取到宽度和高度
    var oBigWidth = getStyle(oBig,"width");
    var oBigHeight = getStyle(oBig,"height");

    var maxx = (parseInt(oBigWidth) - parseInt(oMoveWidth));
    var maxy = (parseInt(oBigHeight) - parseInt(oMoveHeight));

    var index = 0;//全局变量
    var scale = parseInt(oBig.clientWidth)/parseInt(oMoveWidth);//放大倍数
    //clientWidth 可视宽度，没有px getStyle()获取的宽度有px
//console.log(scale);

    for(var i = 0,len = oSmallA.length;i<len;i++){
        oSmallA[i].onmouseenter = function () {//切换大图
            for(var j=0;j<len;j++){
            oSmallA[j].className = "";
        }
       // this.setAttribute("class","hover");
        this.className = "hover";
        index = getIndex(this,oSmallA);
        for(var k=0;k<len;k++){
            oBigA[k].className = "";
        }
        oBigA[index].className = "active";
    }
}

    oBig.onmouseenter= function () {
        oMove.style.display = "block";
        oLarge.style.display = "block";
    }

    oBig.onmouseleave= function () {
        oMove.style.display = "none";
        oLarge.style.display = "none";
    }
    oBig.onmousemove = function (evt) {//移动滑块改变被放大图片的位置
        console.log(index);
        var event = evt || window.event;
        var x = event.clientX - oBig.offsetLeft - oMove.clientWidth/2;
        var y = event.clientY - oBig.offsetTop - oMove.clientHeight/2;
        if(x<0){
            x= 0;
        }
        if(x>maxx){
            x= maxx;
        }
        if(y<0){
            y=0;
        }
        if(y>maxy){
            y=maxy;
        }
        oMove.style.left = x +"px";
        oMove.style.top = y + "px";
        for(var m=0;m<oLargeA.length;m++){
            oLargeA[m].className = "";
        }
        oLargeA[index].className = "select";
        oLargeA[index].style.left = -x*scale + "px";
        oLargeA[index].style.top = -y*scale + "px";
    }
}

function getStyle(elem,attr){
    if(elem.currentStyle){
        return elem.currentStyle[attr];
    }else{
        return window.getComputedStyle(elem,null)[attr];
    }
}
function getTagName(obj,tagname){
    return obj.getElementsByTagName(tagname);
}
function getIndex(elem,elems){
    for(var i= 0,len = elems.length;i<len;i++){
        if(elem == elems[i]){
            return i;
        }
    }
    return -1;
}