function bufferMove(obj,oTarget,fn){
    //清除老的定时器
    clearInterval(obj.iTimer);
    //打开新的定时器
    obj.iTimer = setInterval(function () {
        var bBtn = true;
        for(var sAttr in oTarget){
            if(sAttr === "opacity"){
                var iCur = parseFloat(getStyle(obj,"opacity") * 100);
            }else{
                var iCur = parseInt(getStyle(obj,sAttr));
            }
            //获得速度
            var iSpeed = (oTarget[sAttr] - iCur)/8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if(sAttr === 'opacity'){
                obj.style.opacity = (iCur + iSpeed)/100;
                //兼容低版本的IE
                obj.style.filter = "alpha(opacity=" + (iCur + iSpeed) +")";
            }else{
                obj.style()[sAttr] = iCur + iSpeed + "px";
            }
            //判断当前属性是否运动完毕
            if(iCur + iSpeed !==oTarget[sAttr]){
                bBtn = false;
            }
        }
        //如果bBtn为true，说明所有的运动都已运动完毕
        if(bBtn){
            clearInterval(obj.iTimer);
            if(fn){
                fn();
            }
        }

    },50);
}
function getStyle(obj,sAttr){
    if(obj.currentStyle){
        return obj.currentStyle[sAttr];
    }else{
        return getComputedStyle(obj,null)[sAttr];
    }
}
