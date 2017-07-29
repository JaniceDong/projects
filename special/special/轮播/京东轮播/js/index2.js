window.onload= function () {
    var oBox = document.getElementById("box");
    var oImgListLi = getTagName(oBox,"li");
    //console.log(oImgList);
    var oDirBtn = document.getElementById("dir-btn");
    var oRightBtn = document.getElementById("right-btn");
    var oLeftBtn = document.getElementById("left-btn");
    var oBtnList = document.getElementById("btn-list");
    var oBtnListA = getTagName(oBtnList,"a");
    var index  = 0;
    var timer = null;

    timer = setInterval(function () {
        move();
    },2000);

    oBox.onmouseenter = function () {
        oDirBtn.style.display=  "block";
        clearInterval(timer);
    }
    oBox.onmouseleave = function () {
        oDirBtn.style.display=  "none";
        timer = setInterval(function () {
            move();
        },2000);
    }
    oRightBtn.onclick = function () {
        move();
    }
    oLeftBtn.onclick = function () {
        index --;
        if(index <0){
            index  = oImgListLi.length - 1;
        }
        changeMove();
    }
for(var k = 0,len = oBtnListA.length;k<len;k++){
    oBtnListA[k].index = k;
    oBtnListA[k].onmouseenter = function () {
        index  =  this.index;
        changeMove();
    }
}


function move(){
    index ++;
    if(index > oImgListLi.length - 1){
        index = 0;
    }
    changeMove();

}
function changeMove(){
    for(var i= 0,len=oImgListLi.length;i<len;i++){
        bufferMove(oImgListLi[i],{opacity:0}, function () {
            this.display = "none";
        });
        oBtnListA[i].className = "";
    }
    oImgListLi[index].style.display = "block";
    bufferMove(oImgListLi[index],{opacity:100});
    oBtnListA[index].className = "hover";
    }
}
function getTagName(obj,tagname){
    return obj.getElementsByTagName(tagname);
}