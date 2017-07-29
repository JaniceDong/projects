/**
 * Created by Administrator on 2016/9/28.
 */
$(function(){

    //列表页
    var obtn;
    $(".lift-btn").click(function(){
        if (obtn){
            $(".lift-btn").addClass("left-em");
            $(".lift-box").css({display:'block'});
            $(".paper-box").css({display:'block'});
            $(".lift").removeClass().addClass("lift-text")
        }else {
            $(".lift-btn").removeClass("left-em");
            $(".lift-box").css({display:'none'});
            $(".paper-box").css({display:'none'});
            $(".lift").removeClass().addClass("lift")
        }
        obtn = ! obtn;
    })
    $(".phone").click(function(){
        if (obtn){
            $(".phone-text").css({color:'#000'});
            $(".phone-text").addClass("lift-text");
            $(".phone").addClass("list-less");
            $(".lift-box dd").css({display:'block'})
        }else {
            $(".phone-text").css({color:'#999'});
            $(".phone").removeClass("list-less");
            $(".lift-box dd").css({display:'none'});
            $(".phone-text").removeClass("lift-text")
        }
        obtn =! obtn;
    })
    $(".paper").click(function(){
        if (obtn){
            $(".paper-text").css({color:'#000'});
            $(".paper-text").addClass("lift-text");
            $(".paper").addClass("list-less");
            $(".paper-box dd").css({display:'block'})
        }else {
            $(".paper-text").css({color:'#999'});
            $(".paper").removeClass("list-less");
            $(".paper-box dd").css({display:'none'});
            $(".paper-text").removeClass("lift-text")

        }
        obtn =! obtn;
    })
    $(".option").mouseenter(function(){
        $(".opation-box").css({display:'block'})
    })
    $(".shuxing").mouseleave(function(){
        $(".opation-box").css({display:'none'})
    })
    //切换图片
    $(".left-img").mouseenter(function(){
        $(".first-img").attr("src","images/884516_00--w_300_h_410.jpg")
    })
    $(".left-img").mouseleave(function(){
        $(".first-img").attr('src','images/884516_00--w_300_h_410.jpg')
    })
    $(".right-img").mouseenter(function(){
        $(".first-img").attr('src','images/884516_22_00--w_300_h_410.jpg')
    })
    $(".right-img").mouseleave(function(){
        $(".first-img").attr('src','images/884516_00--w_300_h_410.jpg')
    })

})