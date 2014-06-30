/*!
 * jQuery Focus
 *
 * 
 *
 * Copyright 2014 Akshat Khatri 
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function($){

	// invoking prototype
	$.fn.focus = function(options) {
		
		// declare defaults
		var defaults = {
			background : '#e3e3e3',
			color: 'black'
		},		
		settings = $.extend({}, defaults, options); // override options for what users enter
		
		this.each(function() {
			var $this = $(this);
			
			if($this.is('.focus')) {
				$this.hover(function(e){
					// mouse over
				    $(this).css('z-index','99999');
				    $('#overlay').fadeIn(300); 
				}, function() {
					// mouse out
				    $('.focus').css('z-index','1');
				    $('#overlay').fadeOut(300);  
				});
			}
		});
			// returns jQuery object to allow for chainability
			return this;
	}

})(jQuery);