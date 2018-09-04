;(function($){
	"use strict";
	$.fn.banner = function(options){
		var autoPlay = options.autoPlay!=undefined ? options.autoPlay : true;
		var delayTime = options.delayTime || 1500;
		var moveTime = options.moveTime || 200;
//		this === $.fn对象里面的cont标签
//		index = 0
		this.LOCAL = {
			iPrev:options.items.length-1,
			index:0
		}
		
		var that = this;
		
		if(options.list != undefined && options.list.length > 0){
			options.list.find("*").on("click",function(){
				if(that.LOCAL.index == $(this).index()){}
				if(that.LOCAL.index < $(this).index()){
//					左
					that.LOCAL.move($(this).index(),1)
				}
				if(that.LOCAL.index > $(this).index()){
//					右
					that.LOCAL.move($(this).index(),-1)
				}
			})
		}
		
		if(options.left != undefined && options.left.length > 0 && options.right != undefined && options.right.length > 0){
			
			options.left.on("click",function(){
				that.LOCAL.changeIndex(1)
			})

			options.right.on("click",function(){
				that.LOCAL.changeIndex(-1)
			})
		}
		
		this.LOCAL.changeIndex = function(direct){
			if(direct == 1){
				if(that.LOCAL.index == 0){
					that.LOCAL.index = options.items.length-1;
					that.LOCAL.iPrev = 0;
				}else{
					that.LOCAL.index--;
					that.LOCAL.iPrev = that.LOCAL.index + 1
				}
			}else{
				if(that.LOCAL.index == options.items.length-1){
					that.LOCAL.index = 0;
					that.LOCAL.iPrev = options.items.length-1;
				}else{
					that.LOCAL.index++
					that.LOCAL.iPrev = that.LOCAL.index - 1;
				}
			}
			that.LOCAL.btnMove(direct)
		}
		
		this.LOCAL.move = function(num,i){
			options.items.eq(that.LOCAL.index).css({
				left:0
			}).stop().animate({
				left:-options.items.eq(0).width()*i
			},moveTime).end().eq(num).css({
				left:options.items.eq(0).width()*i
			}).stop().animate({
				left:0
			},moveTime)
			options.list.find("*").removeClass("active").eq(num).addClass("active")
			that.LOCAL.index = num
		}
		
		this.LOCAL.btnMove = function(i){
			options.items.eq(that.LOCAL.iPrev).css({
				left:0
			}).stop().animate({
				left:options.items.eq(0).width()*i
			},moveTime).end().eq(that.LOCAL.index).css({
				left:-options.items.eq(0).width()*i
			}).stop().animate({
				left:0
			},moveTime)
			options.list.find("*").removeClass("active").eq(that.LOCAL.index).addClass("active")
		}
		
		if(autoPlay && options.right != undefined && options.right.length > 0){
			this.LOCAL.timer = setInterval(function(){
				options.right.trigger("click")
//				that.LOCAL.changeIndex(-1)
			},delayTime)
			this.hover(function(){
				clearInterval(that.LOCAL.timer)
			},function(){
				clearInterval(that.LOCAL.timer)
				that.LOCAL.timer = setInterval(function(){
					options.right.trigger("click")
//					that.LOCAL.changeIndex(-1)
				},delayTime)
			})
		}else if(autoPlay && !(options.right != undefined && options.right.length > 0)){
		}
	}
})(jQuery);
