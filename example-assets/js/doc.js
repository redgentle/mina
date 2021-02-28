var header;
(function($){
	$(document).ready(function (){

		header = $("#top-header");
		$('.jumpTo').click(function(e){
			e.preventDefault();
			var $this = $(this);
			var el = $( $this.attr('href') );
			if( el.length > 0 ){
				var position = Math.round(el.offset().top);
				$("html, body").stop().animate(
					{
						scrollTop: position - header.height() - header.position().top
					},
					{
						duration: 1000,
						easing: 'easeInOutExpo'
					}
				);
			}
		});
	});

})(jQuery);
