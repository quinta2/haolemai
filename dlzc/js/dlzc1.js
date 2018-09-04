var code;
	var ocode = document.querySelector(".code");
    function createCode(){
        code = '';
        var codeLength = 4;
        var ocode = document.querySelector(".code");
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
      
        for(var i = 0; i < codeLength; i++){
             var index = Math.floor(Math.random()*36);
             code += random[index]; 
        }
        ocode.value = code;
    }
    window.onload = function (){
        createCode();
    }
    ocode.onclick=function(){
    	createCode();
    }
 	var oyzm=0;
	function validate(){
        var ocode1 = document.querySelector('.code1').value.toUpperCase();
        
        if(ocode1 ==0){
            alert('请输入验证码');
        }else if(ocode1 != code){
            alert('验证码不正确，请重新输入');
            ocode1 = ' ';
            createCode();
        }else{
            oyzm=1;
        }
	}
		
	var oshouji=document.querySelector("#shouji");
	var omima=document.querySelector("#mima");

	var ouser=0;
	oshouji.onblur = function(){
			var reg = /^[\u2E80-\u9FFF\w\-]{4,20}$/;
			if(reg.test(oshouji.value)){
				
				ouser = 1;
			}else{
				alert("用户名不符合规则");
				ouser = 0;
			}
	}
	var opass = 0;
	omima.onblur = function(){
			var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
			if(reg.test(omima.value)){
				
				opass = 1;
			}else{
				alert("密码不符!");
				opass = 0;
			}
	}
	
	var ozhuce=document.querySelector("#zhuce");
	ozhuce.onclick=function(){
		validate();
		if(ouser*opass*oyzm==1){
			$.ajax({
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{
						status:"register",
						userID:$("#shouji").val(),
						password:$("#mima").val()
					},
					success:function(a){
						switch(a){
							case "1":
							$.cookie("user",$("#shouji").val(),{expires:3,path:"/"});
							$.cookie("pass",$("#mima").val(),{expires:3,path:"/"});	
//								setCookie("user",oshouji.value,7)
//								setCookie("pass",omima.value,7)
								alert("注册成功 ,3S后跳转首面");
								
								window.location.href = "http://localhost/index/index.html"
								
								break;
							default:
								alert("用户名重复！")
						}
					}
				})
			}
	}

//   function setCookie(key,value,day){
//			var d = new Date();
//			d.setDate(d.getDate()+day);
//			document.cookie = key + "=" + value + ";expires=" + d
//		}