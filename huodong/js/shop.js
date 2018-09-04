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
		function page(num){
			var ajax = new XMLHttpRequest();
			var url = "http://localhost/index/shop/php/shop.php";
			ajax.open("GET",url,true);
			ajax.onreadystatechange = function(){
				if(ajax.readyState == 4 && ajax.status == 200){
					var res = eval(ajax.responseText)
					var onicai = document.getElementById("nicai")
					var str = '';
						for(var i=num*8;i<num*8+8;i++){
						str +=  '<div class="goodlist" goodsid="'+ res[i].goodsId+'">'+
									'<a href="#">'+
										'<img src="'+res[i].src+'"/>'+
										'<p>'+res[i].jieshao1+'</p>'+
									'</a>'+
									'<p class="jg">'+ res[i].price+'</p>'+
									'<span>'+res[i].jieshao2+'</span>'+
									'<span>'+res[i].jieshao3+'</span>'+
								'</div>';		
						}
						onicai.innerHTML = str;	
						$(".list").find(".goodlist").on("click",function(){
							var id = $(this).attr("goodsid")
							location.href="http://localhost/index/xiangqing/xiangqing.html?"+"id="+id;
//							console.log(id)
						})
				}
			}
			ajax.send(null);
		}
	$(function(){
		$(".pagination").pagination(5,{
			items_per_page:1,
			num_display_entries:5,
			num_edge_entries:2,
			prev_text:"上一页",
			next_text:"下一页",
			callback:function(index){
			page(index);
			}
		})

	})
	$(".che").on("click",function(){
			if(aa){
				window.location.href = "http://localhost/index/gouwuche/gouwuche.html"
			}else{
				alert("请先登录！")
				window.location.href = "http://localhost/index/dlzc/dlzc.html"
			}
		})




//
//		var data;
//		$.ajax({
//		type:"get",
//		url:"http://localhost/index/shop/php/shop.php",
//		success:function(a){
//			show(0)
//			function show(index){
//			data = a;
//			var str = ""
//			for(var i = index*8; i<index*8 + 8;i++){
//				if(i>=a.length){
//					return
//				}
//				str+= '<div class="goodlist">'+
//								'<a href="#">'+
//									'<img src="'+res[i].src+'"/>'+
//									'<p>'+res[i].jieshao1+'</p>'+
//								'</a>'+
//								'<p class="jg">'+ res[i].price+'</p>'+
//								'<span>'+res[i].jieshao2+'</span>'+
//								'<span>'+res[i].jieshao3+'</span>'+
//						'</div>';
//			}
//			
//			$(".pagination").pagination(39, {
//			    num_edge_entries: 2,         //两侧显示的首尾分页的条目数
//			    num_display_entries: 4,      //连续分页主体部分显示的分页条目数
//			    callback: function(index){
//			        show(index)
//			    },
//			    prev_text:"上一页",
//			    next_text:"下一页",
//			    items_per_page:1            //每页显示的条目数
//			});






















