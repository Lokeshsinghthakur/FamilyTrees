/*Custom_js*/

var bodyEl = $("body");
$(window).on("scroll", function() {
    var scrollTop = $(this).scrollTop()+500;
    $("section").each(function() {
        var el = $(this),
            className = el.attr("id");
        if (el.offset().top < scrollTop) {
            bodyEl.addClass(className);  
        } else {
            bodyEl.removeClass(className);
        }
    });
});

$(document).ready(function(e) {
    var offsetbtm = $("#subscribe").height();
	$(".wrapper").css("margin-bottom",offsetbtm);
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
	var logo = $(".navbar-brand > img");
    if (scroll >= 100) {
        $("body").addClass("scrolled");
    }else{
		$("body").removeClass("scrolled");}
		
	if (scroll > 0) {
        $(logo).removeClass("fade");
    }else{
		$(logo).addClass("fade");}
});


$('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    autoHeight:true,
	dots:true,
	autoplay:true,
	autoplayTimeout:3000,
	autoplayHoverPause:false
});


$('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
});




















