//
			var ajax = new XMLHttpRequest();
			var url = "http://localhost/index/goodlist.php";
			ajax.open("GET",url,true);
			
			ajax.onreadystatechange = function(){
				if(ajax.readyState == 4 && ajax.status == 200){
					var res = eval(ajax.responseText)
					var osp = document.getElementById("sp")
					var str = '';
					for(var i=0;i<res.length;i++){
						str += '<div class="sp">'+
									'<a href="#" style="background:url('+res[i].src +')">'+
										'<p>'+ res[i].jieshao1 + '</p>'+
										'<p>' + res[i].jieshao2 +'</p>'+
										'<span>' +res[i].price +'</span>' +
									'</a>'+
								'</div>';
					}
					osp.innerHTML = str;	
				}
			}
			ajax.send(null);
		