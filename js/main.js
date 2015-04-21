var element;

$(document).ready(function (){
	$('.header').on('click', '.header--url--submit', function(event) {
		event.preventDefault();
		var theUrl = $('.header--url--input').val();
		$('.content--embed--element').each(function(index, val) {
			var me = $(this).attr('src', 'curl/getpage.php?page='+theUrl);
			me = me.context.outerHTML;
			$(this).replaceWith(me);
			attachScrool();
		});
	});

	$(window).on('scroll', 'body', function(event) {
		event.preventDefault();
		/* Act on the event */
		report()
	});

	// var myIframe = document.getElementById('test');
	// myIframe.onload = function () {
	// 	$('#test').contents().find('body').scrollTop(500);
	// }
	function attachScrool(){
		var frm = document.querySelector(".content--embed--element").contentWindow;
		frm.onscroll = function(){
			var scroolTopPix = $('#test').contents().find('body').scrollTop();
			$('.content--embed--element').contents().find('body').scrollTop(scroolTopPix);	
		}
	}

	list = document.getElementsByClassName("content--embed--element")
	for (var i = 0; i < list.length; i++) {
			(function (element) {
				console.log(element);
				//C'est ici que ça foire :(
				element.contentWindow.onscroll = function(){
					var scroolTopPix = element.contentWindow.document.body.scrollTop;
					console.log(element);
					$('.content--embed--element').contents().find('body').scrollTop(scroolTopPix);
				}
			}
		)(list[i])
	}

	//attachScrool();

	// var myIframe = document.getElementById('test');
	// myIframe.onload = function () {
	// 	var cusid_ele = document.querySelectorAll('.content--embed--element');
	// 	for (var i = 0; i < cusid_ele.length; ++i) {
	// 		var frm.onscroll = function(){
	// 			var scroolTopPix = cusid_ele[i].contentWindow.pageYOffset;
	// 			console.log(scroolTopPix);
	// 			console.log(frm);
	// 		}
	// 	}
	// }

});
