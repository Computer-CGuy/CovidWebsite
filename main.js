function abs(val){
	if(val<0){
		return -1*val
	}
	return val
}
function send() {
	if($('input.text').val()!=''){
			$('.messager-chat').append('<br><br><div class="message reciever">'+$('input.text').val()+'</div>')
		}
	$('input.text').val("")
	console.log("Message sent!")
	return "Message sent!"	
}
function recieve(text) {
	
	$('.messager-chat').append('<br><br><div class="message sender">'+text+'</div>')
	console.log("Message recieved!")
	return "Message recieved!"	
	// $('input.text').val("")
}
function progress(percentage){
	$('.box').css('background-image','linear-gradient(to bottom, black '+(percentage-5)+'%, green '+(percentage-5)+'%,green '+(percentage+5)+'%, black '+(percentage+5)+'%)')
}
$(document).ready(function() {
	progress(0);
	slide = 3
	slided = 1
	$('input.text').keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			send()
		}
	});

	$('.slideshow').css('width',(slide*innerWidth)+20+'px')
	$('.slideshow-slide').css('width',innerWidth+'px')
	$("body").css('background-color','#3d0524')
	// $('.slide1').scrollLeft(300);
	scrolled = 0
		$('.slide1').animate({scrollLeft: 0}, 800)
	$('.scroller.left').click(function(){
		if(slided<slide){
			$('.slide1').animate({scrollLeft:scrolled+innerWidth}, 800)
			scrolled+=innerWidth
			slided+=1
		}
	});
	$('.scroller.right').click(function(){
		if(slided>1){
			$('.slide1').animate({scrollLeft:scrolled-innerWidth}, 800)
			scrolled-=innerWidth
			slided-=1
		}
	});
	i=0
	$('.shower-card').each(function(){
		i+=1
		if(i%2==0){
			$(this).css('transform-origin','left')
			$(this).css('background-color','lightorange')
		}
		else{
			$(this).css('transform-origin','right')
			$(this).css('background-color','orange')
			$(this).css('transform','rotateY(-30deg)')
			$(this).css('margin-left','-30px')
		}
	})
	$('button.send').click(function(){
		send();
	});
	$('.messager-top').click(function(){
		if($('.messager').hasClass('hide')){
			$('.messager').removeClass('hide')
		}
		else{
			$('.messager').addClass('hide')
		}
	});
	// $('svg').hover(function() {
	// 	console.log("Hovering!")
	// 	$(this).css('fill','white');
	// })
	$(".navbar-item").click(function(){
		$("html, body").animate({scrollTop: $("#s"+this.id).offset().top},600);
	})
	slide1t = $('.slide1-title').offset().top;
	world = $('.world-p').offset().top;
	worldc = $('.world-cases').offset().top;
	world2 = $('.world-cases2').offset().top;
	vline1 = $('.vline1').offset().top;

	india = $('.india-p').offset().top;
	indiac = $('.india-cases').offset().top;
	india2 = $('.india-cases2').offset().top;
	vline2 = $('.vline2').offset().top;

	precautions = $('.title').offset().top;
	scene = $('.scene2').offset().top;
	slide2 = $('.slide2').offset().top;
	slide5 = $('.slide5').offset().top;
})	

$(window).scroll(function(){
    var wScroll = $(window).scrollTop();
    height= $('.slide').height();
    
    $('.slide1-title').css('font-size',(200+(fiter((wScroll)/height)*100))+'px')
    // console.log((250+(fiter((wScroll-slide1t)/height)*100))+'px')
    $('.slide1-title').css('transform',"translateY("+((fiter((wScroll-slide1t)/height)*700))+'px)')
    

    $('.world-p').css('transform',"translateY("+((((wScroll-(world/2))/height)*300)-82)+'px)')
    $('.world-cases').css('transform',"translateY("+((((wScroll-(worldc/2))/height)*200)-50)+'px)')
    $('.world-cases2').css('transform',"translateY("+((((wScroll-(world2/2))/height)*200)-50)+'px)')
    $('.vline1').css('transform',"translateY("+((((wScroll-(vline1/2))/height)*180)-60)+'px)')
    
	$('.india-p').css('transform',"translateY("+((((wScroll-(india/1.6))/height)*300)+4)+'px)')
    $('.india-cases').css('transform',"translateY("+((((wScroll-(indiac/1.6))/height)*200))+'px)')
    $('.india-cases2').css('transform',"translateY("+((((wScroll-(india2/1.6))/height)*200))+'px)')
    $('.vline2').css('transform',"translateY("+((((wScroll-(vline2/1.6))/height)*180))+'px)')
    
    // $('.slide5').css('transform',"translateY("+((((wScroll-(slide5/1.1))/height)*180))+'px)')

    $('.title').css('transform',"translateY("+((((wScroll-(precautions/1.5))/height)*100)-20)+'px)')

    $('.slide2').css('transform',"translateY("+((((wScroll-(slide2/1.1))/height)*180))+'px)')
    // $('.scene2').css('transform',"scale("+(3+((((wScroll-(scene))/height)*10)))+')')
    // console.log("translateY("+((fiter((wScroll-(world-height/2))/height)*700))+'px)')
    // console.log("translateY("+(((fiter(wScroll-a)/height)*1000))+'px)')
    // console.log((100+(((wScroll-$('.slide1-title').offset().top)/height)*50))+'px')
      // $('.s10').css('background-size',(100+(((wScroll-$('.s1').offset().top)/height)*50))+'% '+(100+(((wScroll-$('.s1').offset().top)/height)*50))+'% ')
   
});


function fiter(number) {
	if(number<0){
		return 0;
	}
	// else{
		return number;
	// }
}