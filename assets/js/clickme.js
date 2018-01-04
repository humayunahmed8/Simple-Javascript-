(function ($) {
	"use strict";

    jQuery(document).ready(function($){


		var box = document.getElementById('box'),
		    Lamp = document.getElementById('lamp'), 
			 span = document.getElementsByTagName('span'),
			 h1 = document.getElementsByTagName('h1');
		span[1].onclick =function () {
			'use strict';
			 Lamp.style.boxShadow  ='0 0 80px #fff inset,0 0 30px #eee inset,0 20px 100px #fff';	
			 Lamp.style.background = "#fff";
			h1[0].setAttribute('class', 'h');	
		};
		span[0].onclick = function () {
			'use strict';
			Lamp.style.boxShadow  ='';	
			Lamp.style.background = "";
			h1[0].setAttribute('class', '');
		};



        
	});


}(jQuery));	





	


 






