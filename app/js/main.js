window.onload = init;
function init(){
	var a = $(".button");
	a.hover(function(event){
		$(this).parent().parent().find('.button,.header').css({
			background:'#49cbcd',
			color:'#fff',
			transition:" all ease-out 1s"
		})
	},function(){
		$(this).parent().parent().find('.header').css({
			background:'#000',
			color:'#fff'
		})
		$(this).parent().parent().find('.button').css({
			background:'#788492',
			color:'#fff'
		})
	})
	
}
