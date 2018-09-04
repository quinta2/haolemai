var ozhanghao=document.querySelector(".zhanghao");
var osaoma=document.querySelector(".saoma");
var oc=document.querySelector(".c");
var osm=document.querySelector(".sm");
var omm=document.querySelector(".mm");
var odenglu=document.querySelector("#denglu");
var oshouji1=document.querySelector("#shouji1");
var omima1=document.querySelector("#mima1");
ozhanghao.onclick=function(){
	osm.style.display="none";
	ozhanghao.style.color="#d70057";
	oc.style.display="block";
	osaoma.style.color="black";
	omm.style.display="block";
}
osaoma.onclick=function(){
	osm.style.display="block";
	ozhanghao.style.color="black";
	oc.style.display="none";
	osaoma.style.color="#d70057";	
	omm.style.display="none";
}


//	 oshouji1.value=$.cookie("user",{path:"/"})
//	 omima1.value=$.cookie("pass",{path:"/"})
	odenglu.onclick=function(){
		$.ajax({
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				data:{
					status:"login",
					userID:$("#shouji1").val(),
					password:$("#mima1").val()
				},
				success:function(a){
					switch(a){
//						console.log(a)
						case "0":
						alert("用户名不存在！")
							break;
						case "2":
						alert("密码错误！")
							break;
						default:	
							$.cookie("user",$("#shouji1").val(),{expires:3,path:"/"});
							$.cookie("pass",$("#mima1").val(),{expires:3,path:"/"});	
							alert("登录成功 ,3S后跳转首页");
							
							location.href = "http://localhost/index/index.html"
							
					}
				}
		})
}