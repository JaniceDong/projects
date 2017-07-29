/**
 * Created by Administrator on 2016/9/27.
 */
$(function(){
    $("#main-top h3").click(function(){
        $("#main-top h3").removeClass('cstyle');
        $(this).addClass('cstyle');
    })
    $("#eInput-name").focus(function(){
        $("#right-dress").text("请输入账户或邮箱地址");
    })
    $("#eInput-name").blur(function(){
        $("#right-dress").text("");
    })
    $("#eInput-pass").focus(function(){
        $("#ePass-text").text("请输入密码")
    })
    $("#eInput-pass").blur(function(){
        $("#ePass-text").text("")
    })
    function count(){
        var arr=new Array(0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","J","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
        var str="";
        for(var i=0;i<4;i++){
            var num=parseInt(Math.random()*62);
            str+=arr[num];
        }return str;
    }
    $(".t2").click(function(){
        $("#eInput-name").val("");
        $("#eInput-pass").val("");
        $("#eInput-name").css({borderColor:'none'});
        $("#right-dress").css({color:'none'})
        i = false;
        if (i==false){
            $("#euser-left").text("手机号");
            $("#right-dress").text("请输入手机号");
            $("#eInput-name").focus(function(){
                $("#right-dress").text("请输入手机号");
            })
            $("#eInput-name").blur(function(){
                $("#right-dress").text("");
            })
            $("#log_btn").click(function(){
                if($("#eInput-name").val() == "" || $("#eInput-name").val().length ==0){
                    $("#eInput-name").css({borderColor:'red'})
                    $("#right-dress").text("请输入账户或邮箱地址");
                    $("#right-dress").css({color:'red'})
                    return false;
                }
                if ($("#eInput-pass").val() == "" || $("#eInput-pass").val().length == 0){
                    $("#eInput-pass").css({borderColor:'red'})
                    $("#ePass-text").text("请输入密码")
                    $("#ePass-text").css({color:'red'})
                    return false;
                }
                if ($("#vcode").val() == "" || $("#vcode").val().length ==0){
                    $("#vcode").css({borderColor:'red'})
                    $(".verify").text("请输入验证码")
                    $(".verify").css({color:'red'})
                    return false;
                }
                if ($("#vcode").val() != $(".yz-right").text()){
                    $("#vcode").css({borderColor:'red'})
                    $(".verify").text("验证码错误");
                    $(".verify").css({color:'red'})
                    return false;
                }
                if ($("#eInput-name").val() != $.cookie("use-phone")){
                    $("#eInput-name").css({borderColor:'red'})
                    $("#right-dress").text("手机号错误");
                    $("#right-dress").css({color:'red'})
                    return false;
                }
                if ($("#eInput-pass").val() != $.cookie("use-pass")){
                    $("#eInput-pass").css({borderColor:'red'})
                    $("#ePass-text").text("输入密码错误")
                    $("#ePass-text").css({color:'red'});
                    return false;
                }else {
                    alert("登陆成功")
                }
            })
        }
    })
    var i = true;
    $(".t1").click(function(){
        $("#eInput-name").val("");
        $("#eInput-pass").val("");
        i = true;
        if (i){
            $("#euser-left").text("用户名");
            $("#right-dress").text("请输入账户或邮箱地址");
            $("#eInput-name").focus(function(){
                $("#right-dress").text("请输入账户或邮箱地址");
            })
            $("#eInput-name").blur(function(){
                $("#right-dress").text("");
            })
            $("#log_btn").click(function(){
                if($("#eInput-name").val() == "" || $("#eInput-name").val().length ==0){
                    $("#eInput-name").css({borderColor:'red'})
                    $("#right-dress").text("请输入账户或邮箱地址");
                    $("#right-dress").css({color:'red'})
                    return false;
                }
                if ($("#eInput-pass").val() == "" || $("#eInput-pass").val().length == 0){
                    $("#eInput-pass").css({borderColor:'red'})
                    $("#ePass-text").text("请输入密码")
                    $("#ePass-text").css({color:'red'})
                    return false;
                }
                if ($("#vcode").val() == "" || $("#vcode").val().length ==0){
                    $("#vcode").css({borderColor:'red'})
                    $(".verify").text("请输入验证码")
                    $(".verify").css({color:'red'})
                    return false;
                }
                if ($("#vcode").val() != $(".yz-right").text()){
                    $("#vcode").css({borderColor:'red'})
                    $(".verify").text("验证码错误");
                    $(".verify").css({color:'red'})
                    return false;
                }
                if ($("#eInput-name").val() != $.cookie("use-name")){
                    $("#eInput-name").css({borderColor:'red'})
                    $("#right-dress").text("账户或邮箱地址错误");
                    $("#right-dress").css({color:'red'})
                    return false;
                }
                if ($("#eInput-pass").val() != $.cookie("use-pass")){
                    $("#eInput-pass").css({borderColor:'red'})
                    $("#ePass-text").text("输入密码错误")
                    $("#ePass-text").css({color:'red'});
                    return false;
                }else {
                    alert("登陆成功")
                }
            })
        }
    })
    var eText = $(".yz-right").text(count());
    $(".eCheck").click(function(){
        eText = $(".yz-right").text(count())
    })
    $("#vcode").focus(function(){
        $(".verify").text("请输入验证码")
    })
    $("#vcode").blur(function(){
        $(".verify").text("")
    })
    $(".btn_login").click(function(){
        $(".btn_login").attr("href","banggou.html")
        $.cookie("666","1")
    })
})