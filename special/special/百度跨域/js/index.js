window.onload = function () {

    var oSerchContent = document.getElementById("text");
    console.log(oSerchContent);
    var oSearchList = document.getElementById("search-list");
    var aSearchListLi = [];
    var index = -1;
    var iIndex = 0;
    oSerchContent.oninput = oSerchContent.onpropertychange = function () {
        var oScript = document.createElement("script");
        oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+this.value+"&json=1&p=3&sid=1444_20795_21119_21193_21161_20927&req=2&csor=0&cb=callback";
        document.body.appendChild(oScript);
        document.body.removeChild(oScript);
        aSearchListLi = oSearchList.getElementsByTagName("li");
        index = -1;

        /* oSearchList.onmouseenter = function () {
            console.log(aSearchListLi);
            var event = evt || window.event;
            var tar = event.target || window.event.srcElement;
            iIndex = getIndex(tar,oSearchList);
            console.log(iIndex);

            for(var k=0;k<aSearchListLi.length;k++){
                aSearchListLi[k].className = "";
            }
            aSearchListLi[iIndex].className = "active";
            console.log(aSearchListLi);
            for(var k=0;k<aSearchListLi.length;k++){
                aSearchListLi[k].mouseenter = function () {
                    for(var j =0 ;j<aSearchListLi.length ;j++){
                        aSearchListLi[j].className = "";
                    }
                    this.className = "active";
                }

                }
            }*/

    }
//添加键盘事件
oSerchContent.onkeydown = function (ev) {
    var ev = ev || window.event;
    if(aSearchListLi.length &&(ev.keyCode === 38) || (ev.keyCode === 40)){
        if(ev.keyCode === 38){
            index --;
            if(index < 0){
                index = aSearchListLi.length - 1;
            }
        }else{
            index ++;
            if(index == aSearchListLi.length){
                index = 0;
            }
        }
        for(var i=0;i<aSearchListLi.length;i++){
            aSearchListLi[i].className = "";
        }
        aSearchListLi[index].className = "active";
        oSerchContent.value = aSearchListLi[index].innerText;
        return false;
    }
}
    ///获取焦点
    oSerchContent.onfocus = function () {
        oSearchList.style.display="bolck";
    }
    oSerchContent.onblur = function () {
        oSearchList.style.display = "none";
    }

}
function getIndex(elem,elems) {
    for(var i= 0,len=elems.length;i<len;i++) {
        if(elem===elems[i]) {
            return i;
        }
    }
    return -1;
}
function callback(data){
    var oSearchList = document.getElementById("search-list");
    var sUlHtml = "";
    for(var i=0;i<data.s.length;i++){
        sUlHtml += '<li><a href="javascript:;">' + data.s[i]+ '</a></li>';
    }
    oSearchList.innerHTML = sUlHtml;

}
