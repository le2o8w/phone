$(function(){
	function dateNow() {
		var htmlTime = $('.heure'),
		    htmlDate = $('.date'),
		    htmlDay = $('.day'),
		    htmlToday = $('.day-number'),

		    date = new Date(),
		    currentTime = date.toTimeString().substring(0, 5),
		    currentDate = date.toLocaleString('fr-FR').substring(0, 10),
		    dayOfWeek = date.getDay(),
		    today = date.getDate(),
		    day;

		switch (dayOfWeek) {
			case 1 :
				day = 'Lun';
				break;
			case 2 :
				day = 'Mar';
				break;
			case 3 :
				day = 'Mer';
				break;
			case 4 :
				day = 'Jeu';
				break;
			case 5 :
				day = 'Ven';
				break;
			case 6 :
				day = 'Sam';
				break;
			case 0 :
				day = 'Dim';
				break;
			
		};

		htmlDate.html(currentDate);
		htmlTime.html(currentTime);
		htmlDay.html(day);
		htmlToday.html(today);
	}

	setInterval(dateNow, 200);

	var buttonOff = $('.button-off'),
	    buttonUnlock = $('.button-unlock'),
	    iconeParameters = $('.icone.parameters'),

	    screenVeille = $('.screen-veille'),
	    screenParameters = $('.screen-parameters'),
	    screenActif = $('.screen-actif'),
	    icone = $('.icone'),
	    menu = $('.menu'),
	    back = $('.back');

	    function hideActif() {
	    	screenActif.removeClass('on');
	    	screenActif.addClass('off');
	    }

	    function hideVeille() {
	    	screenVeille.removeClass('on');
	    	screenVeille.addClass('off');
	    	icone.toggleClass('hide');
		    menu.toggleClass('hide');
	    }

	    function hideParameters() {
	    	screenParameters.removeClass('on');
	    	screenParameters.addClass('off');
	    }

	    function showActif() {
	    	screenActif.removeClass('off');
	    	screenActif.addClass('on');
	    }

	    function showVeille() {
	    	screenVeille.removeClass('off');
	    	screenVeille.addClass('on');
	    	icone.toggleClass('hide');
		    menu.toggleClass('hide');
	    }

	    function showParameters() {
	    	screenParameters.removeClass('off');
	    	screenParameters.addClass('on');
	    }


	iconeParameters.on('click', function(){
		showParameters();
		hideActif();
	});

	back.on('click', function(){
		hideParameters();
		showActif();
	});

	buttonOff.on('click', function(){
		if (screenActif.hasClass('on')) {
			hideActif();
			showVeille();
		} else if (screenParameters.hasClass('on')) {
			hideParameters();
			showVeille();
		} else if (screenVeille.hasClass('on')) {
			hideVeille();
			showActif();
		}
	});


	buttonUnlock.on('click',function(){
		if (screenParameters.hasClass('on')) {
			hideParameters();
			showActif();
		} else if (screenVeille.hasClass('on')) {
			hideVeille();
			showActif();
		}
	});


});

const inputs = document.querySelectorAll('.screen-parameters input');
var reset = document.querySelector('.screen-parameters .reset');


function handleUpdate() {
	var baliseHTML = document.documentElement;

	baliseHTML.style.setProperty("--"+this.name, this.value);
}

function resetBackground() {
	var baliseHTML = document.documentElement;

	baliseHTML.style.setProperty("--desktop", "#b5e8fb");
	baliseHTML.style.setProperty("--desktop-mobile", "linear-gradient(to bottom, #30cfd0 0%, #330867 100%)");
	baliseHTML.style.setProperty("--desktop-veille"," #000");
}

inputs.forEach(function(input){
	input.addEventListener('input', handleUpdate);
});

reset.addEventListener('click', resetBackground);

