$(function(){

	var index = 0;

		$('.events ul li img').on('click', function(){
			var index = $('.events ul li img').index(this);
			$(".events ul li p").eq(index).addClass('clicked');

				$('.events ul li i').on('click', function(){
					$(".events ul li p").eq(index).removeClass('clicked');
				});

		});

	});