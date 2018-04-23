/*$(document).ready(function() {
	var btt = $('.btt');
	
	btt.on('click', function(){
		$('html', 'body').animate({
			scrollTop: 0
		}, 500);
	});
	
	$(window).on('scroll', function(){
		var self = $(this),
			height = self.height(),
			top = self.scrollTop();
		
		if(top > height){
			if(!btt.is(':visible')) {
				btt.show();
			}
		} else {
			btt.hide();
		}
	});
});*/
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
};