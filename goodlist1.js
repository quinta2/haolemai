			var ajax = new XMLHttpRequest();
			var url = "http://localhost/index/goodlist1.php";
			ajax.open("GET",url,true);
			ajax.onreadystatechange = function(){
				if(ajax.readyState == 4 && ajax.status == 200){
					var res = eval(ajax.responseText)
					var osp1 = document.getElementById("sp1")
					var str = '';
					for(var i=0;i<res.length;i++){
						str += '<div class="sp1">'+
									'<a href="#" style='+'"background:url('+res[i].src+')">'+
											'<span>'+res[i].jieshao+'</span>'+
											'<span>'+res[i].price+'</span>'+
									'</a>'+
								'</div>'
					}
					osp1.innerHTML = str;	
				}
			}
			ajax.send(null); 