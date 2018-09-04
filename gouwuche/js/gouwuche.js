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

	var str1 = document.cookie;
	var arr1=cookiestr.split(";");
	var goods=[];
			
	

			for (var i = 0; i < arr1.length; i++){
				var pos = arr1[i].indexOf("=");
				var c_name = arr1[i].substring(0,pos);
				var c_value = arr1[i].substring(pos+1);
				c_value = decodeURIComponent(c_value);
//				cookielist[c_name] = c_value;	
				goods[i]=c_name;
				
			}
			var ajax = new XMLHttpRequest();
			var url = "http://localhost/index/gouwuche/php/shop.php";
			ajax.open("GET",url,true);
			ajax.onreadystatechange = function(){
				if(ajax.readyState == 4 && ajax.status == 200){
					var res = eval(ajax.responseText)
					var str=""
					for(var i=0;i<res.length;i++ ){
						for(var j=2;j<goods.length;j++){
							var idid1=parseInt(res[i].goodsId)
							var idid2=parseInt(goods[j])
							if(idid1==idid2){
//								console.log(res[i].goodsId)
//								console.log(goods[j])
								str +=
									'<div class="biao2">'+
				  						'<p class="shuoming">'+
				  							'<span>'+res[idid1-1].jieshao2+'</span>'+
				  							'<span>'+res[idid1-1].jieshao3+'</span>'+
				  						'</p>'+
				  						'<div class="danyisp">'+
				  							'<img src="'+ res[idid1-1].src+'"/>'+
				   							'<span>'+res[idid1-1].jieshao1+'</span>'+
				    						'<span>'+res[idid1-1].price+'</span>'+
					    					'<div class="xiaoji">'+
												'<span class="jian1">-</span>'+
												'<span class="duoshao" dataprice="'+res[idid1-1].pricep+'">1</span>'+
												'<span class="jia1">+</span>'+
											'</div>'+
											'<span class="xiaoji1">'+res[idid1-1].pricep+'</span>'+
											'<span class="xiaoji2" dataid="' +res[idid1-1].goodsId +'" >删除</span>'+
				  						'</div>'+
				 					'</div>'
							}
						}
					}
					var obiao1=document.querySelector(".biao1");
					obiao1.innerHTML=str;
				}
			}
			ajax.send(null);

       $(".biao1").on("click",".xiaoji2",function(){
       	
       var nihao = $(this).attr("dataid")

       	$.cookie(nihao,"1",{expires:-3,path:"/"});
       	$(this).parent().parent().remove();
       	window.location.reload();
       })
		
        $(".biao1").on("click",".jian1",function(){
        	var num  =parseInt($(this).next().get(0).innerHTML);
        	if(num<=1){
				alert("最小为1！")
			}else{
			num--;
			$(this).next().get(0).innerHTML=num;
			var pricepp=parseInt($(this).next().attr("dataprice"));
			$(this).parent().next().get(0).innerHTML=num*pricepp+'元';
			var zongji=0;
			$('.xiaoji1').each(function(i,k){
	        	var b = parseInt($(this).get(0).innerHTML);
	        	zongji+=b;
				 })
			$(".zongjiji").get(0).innerHTML=zongji+"元";
			}
        })
		$(".biao1").on("click",".jia1",function(){
			var num  =parseInt($(this).prev().get(0).innerHTML);
			if(num>=9){
				alert("单件商品最多购买数量为9！")
			}else{
			num++;
			$(this).prev().get(0).innerHTML=num;
			var pricepp=parseInt($(this).prev().attr("dataprice"));
			$(this).parent().next().get(0).innerHTML=num*pricepp+'元';
			var zongji=0;
			$('.xiaoji1').each(function(i,k){
	        	var b = parseInt($(this).get(0).innerHTML);
	        	zongji+=b;
				 })
			$(".zongjiji").get(0).innerHTML=zongji+"元";
			}
		})
		$(".biao1").on("mouseover",".biao2",function(){
			var zongji=0;
			$('.xiaoji1').each(function(i,k){
	        	var b = parseInt($(this).get(0).innerHTML);
	        	zongji+=b;
				 })
			$(".zongjiji").get(0).innerHTML=zongji+"元";
			
		})



