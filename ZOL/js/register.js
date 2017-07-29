(function ($) {
   $(function () {
       var index =0;
       var phonenum = /^1[34578]\d{9}$/;
       var password = /^[0-9a-zA-Z]{6,16}$/;

       var num = /^[0-9]+$/;//判断是数字  val("")  识别""为0


       //聚焦
       $(".phone .regform .text").focus(function () {
           index = $(".phone .regform .text").index($(this));
           //$(".phone .regform .wrong").eq(index).css({borderColor:""});
           $(".phone .regform .text").eq(index).css({borderColor:"red"});
       });

       //失去焦点

//手机号验证
       $("#phone").blur(function () {
           var phoneValue = $("#phone").val();
           $(".phone .regform .text").css({borderColor:""});
           if(phoneValue == ""){
               $(".phone .regform .wrong").eq(0).css({display:"block"});
               $(".phone .regform .wrong1").eq(0).css({display:"none"});
               $(".phone .regform .right").eq(0).css({display:"none"});
            return;
           }
           else if(phonenum.test(phoneValue)){
               $(".phone .regform .right").eq(0).css({display:"block"});
               $(".phone .regform .wrong").eq(0).css({display:"none"});
               $(".phone .regform .wrong1").eq(0).css({display:"none"});

           }else{
               $(".phone .regform .wrong1").eq(0).css({display:"block"});
               $(".phone .regform .wrong").eq(0).css({display:"none"});
           }

       });
//随机验证码验证
       $("#random").blur(function () {
           var randomValue = $("#random").val();
           $(".phone .regform .text").css({borderColor:""});
           if(randomValue == ""){
               $(".phone .regform .wrong").eq(1).css({display:"block"});
               $(".phone .regform .wrong1").eq(1).css({display:"none"});
               $(".phone .regform .right").eq(1).css({display:"none"});
            return ;
           }
           if(randomValue.toLowerCase()===myMap[data].toLowerCase()){//不区分大小写
               $(".phone .regform .right").eq(1).css({display:"block"});
               $(".phone .regform .wrong").eq(1).css({display:"none"});
               $(".phone .regform .wrong1").eq(1).css({display:"none"});

           }else{
               $(".phone .regform .wrong1").eq(1).css({display:"block"});
               $(".phone .regform .wrong").eq(1).css({display:"none"});
               $(".phone .regform .right").eq(1).css({display:"none"});
           }

       });
//短信验证
       $("#message").blur(function () {
           var messageValue = $("#message").val();
           $(".phone .regform .text").css({borderColor:""});
           if(messageValue == ""){
               $(".phone .regform .wrong").eq(2).css({display:"block"});
               $(".phone .regform .wrong1").eq(2).css({display:"none"});
               $(".phone .regform .wrong2").eq(2).css({display:"none"});
               $(".phone .regform .right").eq(2).css({display:"none"});
            return ;
           }else{
               $(".phone .regform .wrong").eq(2).css({display:"none"});
               $(".phone .regform .wrong1").eq(2).css({display:"none"});
               $(".phone .regform .wrong2").eq(2).css({display:"none"});
               $(".phone .regform .right").eq(2).css({display:"none"});
           }

       });
 //密码验证
       $("#password").blur(function () {
           var passwordValue = $("#password").val();
           $(".phone .regform .text").css({borderColor:""});
           if(passwordValue == ""){
               $(".phone .regform .wrong").eq(3).css({display:"block"});
               $(".phone .regform .wrong1").eq(3).css({display:"none"});
               $(".phone .regform .wrong2").eq(3).css({display:"none"});
               $(".phone .regform .right").eq(3).css({display:"none"});
            return;
           }
           if(num.test(passwordValue)){
               $(".phone .regform .wrong2").eq(3).css({display:"block"});
               $(".phone .regform .wrong").eq(3).css({display:"none"});
               $(".phone .regform .wrong1").eq(3).css({display:"none"});
               $(".phone .regform .right").eq(3).css({display:"none"});
           }else if(password.test(passwordValue)){
               $(".phone .regform .right").eq(3).css({display:"block"});
               $(".phone .regform .wrong2").eq(3).css({display:"none"});
               $(".phone .regform .wrong").eq(3).css({display:"none"});
               $(".phone .regform .wrong1").eq(3).css({display:"none"});
           }else{
               $(".phone .regform .right").eq(3).css({display:"none"});
               $(".phone .regform .wrong2").eq(3).css({display:"none"});
               $(".phone .regform .wrong").eq(3).css({display:"none"});
               $(".phone .regform .wrong1").eq(3).css({display:"block"});
           }
          //alert(password.test(passwordValue));
       });
 //二次密码验证
       $("#confirmpass").blur(function () {
           var confirmValue = $("#confirmpass").val();
           $(".phone .regform .text").css({borderColor:""});
           //console.log(confirmValue);
           if(confirmValue == ""){
               $(".phone .regform .wrong").eq(4).css({display:"block"});
               $(".phone .regform .wrong1").eq(4).css({display:"none"});
               $(".phone .regform .wrong2").eq(4).css({display:"none"});
               $(".phone .regform .right").eq(4).css({display:"none"});
               return;
           }else if(num.test(confirmValue)){
               $(".phone .regform .wrong2").eq(4).css({display:"block"});
               $(".phone .regform .wrong").eq(4).css({display:"none"});
               $(".phone .regform .wrong1").eq(4).css({display:"none"});
               $(".phone .regform .right").eq(4).css({display:"none"});

           }else if(confirmValue == $("#password").val()){
               $(".phone .regform .right").eq(4).css({display:"block"});
               $(".phone .regform .wrong2").eq(4).css({display:"none"});
               $(".phone .regform .wrong").eq(4).css({display:"none"});
               $(".phone .regform .wrong1").eq(4).css({display:"none"});
           } else{
               $(".phone .regform .right").eq(4).css({display:"none"});
               $(".phone .regform .wrong2").eq(4).css({display:"none"});
               $(".phone .regform .wrong").eq(4).css({display:"none"});
               $(".phone .regform .wrong1").eq(4).css({display:"block"});
           }
       });

//获取短信验证码
       var i =100;
        var time = null;
       clearInterval(time);
       $(".regform .get-capta").click(function () {

           var phoneValue = $("#phone").val();
        if(phoneValue == ""){
            $(".phone .regform .wrong").eq(0).css({display:"block"});
            $(".phone .regform .wrong1").eq(0).css({display:"none"});
            $(".phone .regform .right").eq(0).css({display:"none"});
            return ;
        }else{
            $(".phone .regform .wrong").eq(2).css({display:"none"});
            $(".phone .regform .wrong1").eq(2).css({display:"none"});
            $(".phone .regform .wrong2").eq(2).css({display:"none"});
            $(".phone .regform .right").eq(2).css({display:"none"});
            $(".phone .regform .wrong").eq(0).css({display:"none"});
        }
          /* */
           $(".regform .get-capta").css({display:"none"});
           $(".regform .loading").css({display:"block"});
           time = setInterval(function () {
               i --;
               $(".regform .sms-capta em").text(i);
               if(i <= 0){
                   $(".regform .loading").css({display:"none"});
                   clearInterval(time);
               }
           },1000);
       });

       //获取随机验证码
       var data = Math.ceil(Math.random() *  10);//刷新获取第一次的随机码
       var myMap = {};
       myMap[1] = "2B92c";
       myMap[2] = "61c8a";
       myMap[3] = "1d44e";
       myMap[4] = "f6ed1";
       myMap[5] = "52787";
       myMap[6] = "eb2ad";
       myMap[7] = "99b39";
       myMap[8] = "216b7";
       myMap[9] = "5aa95";
       myMap[10] = "67174";

       $(".regform .cap-img img").attr("src","../img/captcha"+data+".png");
       $(".regform .change").click(function () {
            data= Math.ceil(Math.random() *  10);
           $(".regform .cap-img img").attr("src","../img/captcha"+data+".png");
       });


      console.log(getCookie("手机号:"));
       console.log(getCookie("密码:"));

       /*//删除cookie 变成session会话
       function  removeCookie(name,path){
           document.cookie = name + "=;expires = -1; path=" + path
       }*/
///点击注册
    $(".phone .submit-btn").click(fn);
       $(document).bind("keydown", function (evt) {
           var event = evt ||window.event;
           if(event.keyCode == 13){
               $(document).click(fn);
           }
       });




function fn(){
        $(".phone .submit-btn").css({display:"none"});
        $(".phone .register-btn").css({display:"block"});

        setTimeout(function () {
            $(".phone .submit-btn").css({display:"block"});
            $(".phone .register-btn").css({display:"none"});
            if($('#phone').val() ==""||$('#random').val() =="" ||$('#message').val() ==""||$('#password').val() == "" || $('#confirmpass').val() == ""){
                return evt ? evt.preventDefault():$(window).event.returnValue=false;
                // return false;
            }else{
                setCookie("手机号:",$('#phone').val(),7,"/");
                setCookie("密码:",$('#password').val(),7,"/");
                $("form").submit();
                location.href = "../html/login.html";
            }

        },1000);
}
   });

})(jQuery);
