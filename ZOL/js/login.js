(function ($){
    $(function () {
    var index =0;
    var defaultValue = $(".m input").get(index).defaultValue;//获取输入框的默认值
        console.log(defaultValue);

    $(".register .m .text").focus(function () {
        index = $(".register .m .text").index($(this));//获取input框的下标


        $(".register .m .text").eq(index).css({borderColor:"red"});


       // $(".register .m .text").eq(index).val("");

    });
        $(".register .m .text").blur(function () {

           if($(".m input").eq(index).val() === ""){
               //失去焦点，恢复默认值
               $(".m input").eq(index).val(defaultValue);//如果输入值为空还原为默认值
               //console.log($(".m input").get(index).defaultValue);
           }
            $(".register .m .text").eq(index).css({borderColor:""});
        });


//记住登录状态

        /*if($(".m .check").checked){

            $(".m input").eq(0).val(getCookie("手机号:"));
            $(".m input").eq(1).val(getCookie("密码:"));

        }*/

      //  var flag = true;
//登陆
        $(".m .btn").click(fn);

        $(document).bind("keydown", function (evt) {
            var event = evt ||window.event;
            if(event.keyCode == 13){
                $(document).click(fn);
            }
        });

        function fn(){
            getCookie("手机号:");
            getCookie("密码:");

            if($(".m input").eq(0).val() == getCookie("手机号:") && $(".m input").eq(1).val() == getCookie("密码:")){
                setCookie('is_login', 1, 7, '/');
                location.href = "index.html";
                return false;
            }else{
                $(".m .wrong").css({display:"block"});
            }
        }
       getCookie("手机号:");
        getCookie("密码:");
    });



})(jQuery);
