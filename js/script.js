$(".two").owlCarousel({
	loop: true,
	margin: 200,
	dots: true,
	nav: true,
	items: 3,
	autoWidth:true,
	auto: true,
	responsiveClass:true,
	responsive:{
		740:{
			loop: true,
			margin: 450,
			dots: true,
			nav: false,
			items: 2,
			autoWidth:true,
			stagePadding:true,
			center:true
		},
		1024:{
			loop: false,
			margin: 600,
			dots: true,
			nav: false,
			items: 2,
			autoWidth:true,
			center: true
		},
		1360:{
			loop: true,
			margin: 0,
			dots: true,
			nav: false,
			items: 2,
			autoWidth:true,
			stagePadding: true
		},
		1440:{
			loop: true,
			margin: 0,
			dots: true,
			nav: true,
			items: 2,
			autoWidth:true
		},
		1920:{
			loop: true,
			margin: 100,
			dots: true,
			nav: true,
			items: 2,
			autoWidth:true
		},
		2560:{
			loop: true,
			margin: 200,
			dots: true,
			nav: true,
			items: 2,
			autoWidth:true
		}
	}
});

$(".one").owlCarousel({
	loop: false,
	margin: 200,
	dots: true,
	nav: true,
	items: 3,
	autoWidth:true,
	responsiveClass:true,
	responsive:{
		740:{
			loop: false,
			margin: 450,
			dots: true,
			nav: false,
			items: 3,
			autoWidth:true,
			stagePadding:true,
			center:true
		},
		1024:{
			loop: false,
			margin: 600,
			dots: true,
			nav: false,
			items: 3,
			autoWidth:true,
			stagePadding:true,
			center:true
		},
		1360:{
			loop: false,
			margin: 300,
			dots: true,
			nav: false,
			items: 3,
			autoWidth:true,
			stagePadding:true
		},
		1440:{
			loop: false,
			margin: 0,
			dots: true,
			nav: true,
			items: 3,
			autoWidth:true,
			stagePadding:true
		},
		1920:{
			loop: false,
			margin: 100,
			dots: true,
			nav: true,
			items: 3,
			autoWidth:true
		},
		2560:{
			loop: false,
			margin: 200,
			dots: true,
			nav: true,
			items: 3,
			autoWidth:true
		}
	}
});

let currentDate = new Date();

$(window).on('load', function(){
    initMobileMenu();
	console.log(currentDate.getDay());
	if(!(currentDate.getDay() <= 6)){
		if((currentDate.getHour() >= 8) && (currentDate.getHour() < 20)){
			document.getElementById("colsed2").innerHTML = ", закроется в 20:00";
			document.getElementById("colsed").innerHTML = "Открыто";
			document.getElementById("colsed").style.color = "#48c535";
		}
	}
	if(currentDate.getDay() == 7){
		document.getElementById("colsed2").innerHTML = ", откроется завтра в 8:00";
	}
	if(currentDate.getDay() == 6){
		if((currentDate.getHour() >= 8) && (currentDate.getHour() < 20)){
			document.getElementById("colsed2").innerHTML = ", закроется в 20:00";
			document.getElementById("colsed").innerHTML = "Открыто";
			document.getElementById("colsed").style.color = "#48c535";
		}
	}
	
	emailjs.init("Zz8QcDUKjyB1LKIPq");
	emailjs.send("service_1z9nz4p", "template_3qyv2av", { to_name: "testyoman61@gmail.com", message: "РАБОТАЕТ УРА А ТЕПЕРЬ ПРОДОЛЖАЙ РАБОТАТЬБ", reply_to: "testforyoman@mail.ru" }) .then(response => console.log('Письмо успешно отправлено!', response)) .catch(error => console.log('Возникла ошибка...', error));
});

$(window).on('scroll', function() {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 400;
    if ($('html').scrollTop() > $(window).height() - TOP_OFFSET) {
        $('#scrollUpArrow').addClass('visible');
    }
    else {
        $('#scrollUpArrow').removeClass('visible');
    }
}



$('#scrollUpArrow').on('click', function() {
    $('body, html').animate({
        scrollTop : 0}, 300);
    }
);

function initMobileMenu() {
    $('#menuButton').on('click', function() {
        $('#menuButton').toggleClass('active');
        $('#menuContainer').toggleClass('active');
    });
}

$('#subscribePopupButton').on('click', function() {
    $('#popupWindow').addClass('visible');
    $('#overlay').addClass('visible');
}
);

$('#vtorich').on('click', function() {
    $('#popup_wrapperForVtorichka').addClass('visible');
    $('#overlay').addClass('visible');
}
);

$('#vtorich2').on('click', function() {
    $('#popup_wrapperForVtorichka').addClass('visible');
    $('#overlay').addClass('visible');
}
);
$('#vtorich3').on('click', function() {
    $('#popup_wrapperForVtorichka').addClass('visible');
    $('#overlay').addClass('visible');
}
);
$('#vtorich4').on('click', function() {
    $('#popup_wrapperForVtorichka').addClass('visible');
    $('#overlay').addClass('visible');
}
);

$('#closeButton').on('click', function() {
    $('#popupWindow').removeClass('visible');
    $('#overlay').removeClass('visible');
}
);

$('#popup_wrapperForVtorichka').on('click', function(event) {
    if (event.target.id == 'popup_wrapperForVtorichka'){
    $('#popup_wrapperForVtorichka').removeClass('visible');
    $('#overlay').removeClass('visible');}
}
);

$('#closeButton').on('click', function() {
    $('#popup_wrapperForVtorichka').removeClass('visible');
    $('#overlay').removeClass('visible');
}
);

$('#closeButton').on('click', function() {
    $('#popup_wrapperForVtorichka').removeClass('visible');
    $('#overlay').removeClass('visible');
}
);

$('#popup_wrapperForVtorichka').on('click', function(event) {
    if (event.target.id == 'popup_wrapperForVtorichka'){
    $('#popup_wrapperForVtorichka').removeClass('visible');
    $('#overlay').removeClass('visible');}
}
);

$("form").submit(function(event) {
    event.preventDefault();
    if ($("#emailField").val() == '') {
        $('#emailField').addClass('error');
        $('#errorMessage').removeClass('hidden');
    }
	else {
        $("#emailField").removeClass('error');
        $('#errorMessage').AddClass('hidden');
    }
});

$("#emailField").focus(function() {
    $('#errorMessage').addClass('hidden');
    $("#emailField").removeClass('error');
});

