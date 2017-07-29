/**
 * Created by Administrator on 2016/9/27.
 */
$(function(){
    var uesrname="";
    $("#username").blur(function(){
        uesrname = $("#username").val();
        var message = $("#user-message");
        var reg =/^[a-zA-Z|\u4E00-\u9FA5]+[\u4E00-\u9FA5\w\d]+$/;
        if(uesrname == ""|| uesrname.length ==0 ){
            message.text("用户名不能为空");
            message.css({color:'red'});
            return false;
        }
        if(uesrname.length<4 || uesrname.length>20){
            message.text("用户名只能为4-20个字符，一个汉字为两个字符");
            message.css({color:'red'});
            return false;
        }
        if(reg.test(uesrname)==false){
            message.text("以中、英文开头，与数字下划线组成");
            message.css({color:'red'});
            return false;
        }else {
            message.text("用户名可用");
            message.css({color:'green'});
            return false;
        }


    })
    var phonenum = "";
    $("#uesrnum").blur(function(){
        phonenum = $("#uesrnum").val();
        var reg2 = /^1(3|4|5|7|8)\d{9}$/;
        var numText = $("#num-text");
        if(reg2.test(phonenum) == true){
            numText.text("");
            return false;
        }else {
            numText.text("手机号码不合法！");
            return false;
        }
    })
    var mytext = $("#mySpan2").text(count());
    $("#img2Code").blur(function(){
        var yanzheng = $("#img2Code").val();
        var yantext = $("#img2_message");
        if(yanzheng.length==0||yanzheng ==""){
            yantext.text("验证码不能为空");
        }
    })
    $("#check").click(function(){
        mytext = $("#mySpan2").text(count());
    })
    function count(){
        var arr=new Array(0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","J","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
        var str="";
        for(var i=0;i<4;i++){
            var num=parseInt(Math.random()*62);
            str+=arr[num];
        }return str;
    }
    $("#send").click(function(){
        if($("#img2Code").val() != $("#mySpan2").text()){
            $("#img2_message").text("验证码错误");
            return false;
        }
        $(".reg-box").css({display:'none'})
        $("#reg-box2").css({display:'block'})
        $("#user_id").val(uesrname);
        $("#mobile2").val(phonenum);
    })
    $("#name-pass").blur(function(){
        var password = $("#name-pass").val();
        var reg3 = /^\s+|\s+$/g;
        if(password == "" || password.length ==0){
            $("#pass-text").text("密码不能为空");
            $("#pass-text").css({color:'red'});
            return false;
        }
        if(reg3.test(password)){
            $("#pass-text").text("密码前后不能有空格");
            $("#pass-text").css({color:'red'});
            return false;
        }
        if(password.length<6||password.length>16){
            $("#pass-text").text("密码密码长度只能为6~16");
            $("#pass-text").css({color:'red'});
            return false;
        }else {
            $("#pass-text").text("");
        }

    });
    $("#name-pass2").blur(function(){
        var passwordnext = $("#name-pass2").val();
        var password = $("#name-pass").val();
        if(password !==""||password.length!==0){
            if(password != passwordnext){
                $("#pass-text2").text("两次密码不相同");
                $("#pass-text2").css({color:'red'});
                return false;
            }
            if(password === passwordnext) {
                $("#pass-text2").text("");
                return false;
            }
        }
    })
    $(".agree").click(function(){
        if($("#name-pass").val() ==""||$("#name-pass2").val()==""||$("#activeCode").val()==""){
            alert("请正确填写表单")
            return false;
        }
        $.cookie("use-name",uesrname,{path:"/"},{expires:66});
        $.cookie("use-phone",phonenum,{path:"/"},{expires:66});
        $.cookie("use-pass",$('#name-pass').val(),{path:"/"},{expires:66});
        $("#reg-box2").css({display:'none'})
        $("#reg-box3").css({display:'block'})
        $("#reg-title").css({display:'none'})
        $(".success-name").text($.cookie("use-name"));
    })
    $(".btn_goShop").click(function(){
        $(".btn_goShop").attr("href","banggou.html")
        $.cookie("666","1")
    })
})
