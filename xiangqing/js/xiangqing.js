var omybuy=document.querySelector(".mybuy")
		var odiv = omybuy.children[1];
		var op = omybuy.children[0];
		var omyphone=document.querySelector(".myphone")
		var op1 = omyphone.children[0];
		var odiv1 = omyphone.children[1];
		var omyweixin=document.querySelector(".myweixin")
		var op2 =omyweixin.children[0];
		var odiv2=omyweixin.children[1];
		var omykefu = document.querySelector(".mykefu")
		var op3 =omykefu.children[0];
		var odiv3 =omykefu.children[1];
		var osous=document.querySelector(".sous")
		var oydsh=document.querySelector(".ydsh")
		var oydsh1=document.querySelector(".ydsh1")
		var oxiuxi=document.querySelector(".xiuxi")
		var oxiuxi1=document.querySelector(".xiuxi1")
		var oyd = document.querySelector(".yd")
		var ocd=document.querySelector("#cd")
		var odengluaa=document.querySelector("#dengluaa")
		var ozhuceaa=document.querySelector("#zhuceaa")
		
		
		var aa=$.cookie("user",{path:"/"})
		if(aa){
			odengluaa.innerHTML="欢迎"
			odengluaa.style.color="#d70057"
			ozhuceaa.innerHTML="";
			var cookiestr = document.cookie;
			var cookiearr=cookiestr.split(";");
			$(".che").get(0).value= '去购物车结算('+ (cookiearr.length-2) +')';
		}
		omybuy.onmouseover = function () {
			odiv.style.display="block"
			op.style.color="red"
			op.style.background="#fff"
			op.style.border="1px solid #dcdcdc"
			op.style.borderBottom="none"
			odiv.style.border="1px solid #dcdcdc"
			odiv.style.borderTop='none'
		}
		omybuy.onmouseout = function () {
			odiv.style.display = "none"
			op.style.color="#333"
			op.style.border="none"
			op.style.background="#f2f2f2"
		}
		omyphone.onmouseover = function () {
			odiv1.style.display="block"
			op1.style.color="red"
			op1.style.background="#fff"
			op1.style.border="1px solid #dcdcdc"
			op1.style.borderBottom="none"
			odiv1.style.border="1px solid #dcdcdc"
			odiv1.style.borderTop='none'
		}
		omyphone.onmouseout = function () {
			odiv1.style.display = "none"
			op1.style.color="#333"
			op1.style.border="none"
			op1.style.background="#f2f2f2"
		}
		omyweixin.onmouseover = function () {
			odiv2.style.display="block"
			op2.style.color="red"
			op2.style.background="#fff"
			op2.style.border="1px solid #dcdcdc"
			op2.style.borderBottom="none"
			odiv2.style.border="1px solid #dcdcdc"
			odiv2.style.borderTop='none'
		}
		omyweixin.onmouseout = function () {
			odiv2.style.display = "none"
			op2.style.color="#333"
			op2.style.border="none"
			op2.style.background="#f2f2f2"
		}
		omykefu.onmouseover = function () {
			odiv3.style.display="block"
			op3.style.color="red"
			op3.style.background="#fff"
			op3.style.border="1px solid #dcdcdc"
			op3.style.borderBottom="none"
			odiv3.style.border="1px solid #dcdcdc"
			odiv3.style.borderTop='none'
		}
		omykefu.onmouseout = function () {
			odiv3.style.display = "none"
			op3.style.color="#333"
			op3.style.border="none"
			op3.style.background="#f2f2f2"
		}
		osous.value="请输入商品名...";
		osous.onfocus = function(){
			osous.value="";
		}
		osous.onblur = function(){
			osous.value="请输入商品名...";
		}
		oydsh.onmouseover = function(){
			oydsh1.style.color="red";
			oyd.style.display="block"
		}
		oydsh.onmouseout= function(){
			oyd.style.display="none";
			oydsh1.style.color="#fff";
		}
		oxiuxi.onmouseover = function(){
			oxiuxi1.style.color="red";
			oyd.style.display="block"
		}
		oxiuxi.onmouseout= function(){
			oyd.style.display="none";
			oxiuxi1.style.color="#fff";
		}
		document.addEventListener("scroll",function(){
			var top = document.documentElement.scrollTop
			
			if(top>138){
				ocd.style.position="fixed";
				ocd.style.top = 0+"px";
				ocd.style.zIndex="100";
			}else{
				ocd.style.position="absolute"
				ocd.style.top=138+"px";
				ocd.style.zIndex="100";
			}
    })
			var name, value;
			var str = location.href; 
			var num = str.indexOf("?")
			str = str.substr(num + 1);
			var arr = str.split("&"); 
			for (var i = 0; i < arr.length; i++) {
				num = arr[i].indexOf("=");
				if (num > 0) {
				name = arr[i].substring(0, num);
				value = arr[i].substr(num + 1);
				}
			}
			
			var ajax = new XMLHttpRequest();
			var url = "http://localhost/index/xiangqing/php/shop.php";
			ajax.open("GET",url,true);
//
			ajax.onreadystatechange = function(){
				if(ajax.readyState == 4 && ajax.status == 200){
					var index = parseInt(value);
					var res = eval(ajax.responseText)
					var oxiangqing = document.querySelector("#xiangqing")
					var str = '';		
					    str='<div class="xqing">'+
								'<div class="tupian">'+
									'<img src="'+res[index-1].src+'"/>'+
									'<span class="haha"></span>'+
									'<p></p>'+
								'</div>'+
								'<div class="tupian1">'+
									'<img class="dong" src="'+res[index-1].src+'"/>'+
								'</div>'+
								'<div class="qita">'+
									"<p>"+res[index-1].jieshao1+'</p>'+
									'<p>'+
										'<span>好乐买价：</span>'+
										'<span>'+res[index-1].price+'</span>'+
									'</p>'+
									
									'<p>'+
										'<span>活动</span>'+
										'<span>'+res[index-1].jieshao2+'</span>'+
										'<span>'+ res[index-1].jieshao3+'</span>'+
									'</p>'+
									
									'<div class="box">'+
										'<span class="shuliang">数量</span>'+
										'<div>'+
											'<span class="jian">-</span>'+
											'<span class="duoshao">1</span>'+
											'<span class="jia">+</span>'+
										'</div>'+
									'</div>'+
									'<input type="button" name="" id="jiarugou" value="加入购物车" />'+
								'</div>'+
							'</div>';
							oxiangqing.innerHTML = str;	
				}
			}
			ajax.send(null);
		var otupian=document.querySelector(".tupian");
		var ohaha=document.querySelector(".haha");
		var otupian1=document.querySelector(".tupian1");
		var oimg=otupian1.children[0];
		var oqita=document.querySelector(".qita");
		var oxiangqing=document.querySelector("#xiangqing")
		
		$("#xiangqing").on("mouseover",".tupian",function(){
			$(".qita").css({display:"none"})
			$(".tupian1").css({display:"block"})
			$(".haha").css({display:"block"})
			var maxw=$(".tupian").get(0).offsetWidth- $(".haha").get(0).offsetWidth;
			var maxh=$(".tupian").get(0).offsetHeight- $(".haha").get(0).offsetHeight;
			$("#xiangqing").on("mousemove",".tupian",function(eve){
				var e = eve || window.event;
				var l = e.offsetX - $(".haha").get(0).offsetWidth/2;
				var t = e.offsetY - $(".haha").get(0).offsetHeight/2;
				if(l<0) l=0;
				if(t<0) t=0;
				if(l>maxw) l=maxw;
				if(t>maxh) t=maxh;
				$(".haha").css( "left",l)
				$(".haha").css( "top",t)
				var bX = l / maxw;
				var bY = t / maxh;
				var l1=-($(".dong").get(0).offsetWidth-$(".tupian1").get(0).offsetWidth)*bX +"px";
				var t1=-($(".dong").get(0).offsetHeight-$(".tupian1").get(0).offsetHeight)*bY +"px";
//				console.log($(l1)
				$(".dong").css("left",l1)
				$(".dong").css("top",t1)
	
			})
			
		})
		$("#xiangqing").on("mouseout",".tupian",function(){
			$(".qita").css({display:"block"})
			$(".tupian1").css({display:"none"})
			$(".haha").css({display:"none"}) 
		})
//		var num=1;
//		$("#xiangqing").on("click",".jian",function(){
//			if(num<=1){
//				alert("最小为1！")
//			}else{
//			num--;
//			$(".duoshao").get(0).innerHTML=num;
//			}
//		})
//		$("#xiangqing").on("click",".jia",function(){
//			if(num>=9){
//				alert("单件商品最多购买数量为9！")
//			}else{
//			num++;
//			$(".duoshao").get(0).innerHTML=num;
//			}	
//		})
		
		$("#xiangqing").on("click","#jiarugou",function(){
			if(aa){
				$.cookie(value,num,{expires:3,path:"/"});
				var cookiestr = document.cookie;
				var cookiearr=cookiestr.split(";");
				$(".che").get(0).value= '去购物车结算('+ (cookiearr.length-2) +')';
				alert("加入购物车成功!")
			}else{
				alert("请先登录！")
				window.location.href = "http://localhost/index/dlzc/dlzc.html"
			}
			
		})

		$(".che").on("click",function(){
			if(aa){
				window.location.href = "http://localhost/index/gouwuche/gouwuche.html"
			}else{
				alert("请先登录！")
				window.location.href = "http://localhost/index/dlzc/dlzc.html"
			}
		})




































