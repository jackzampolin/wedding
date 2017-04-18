// ScrollReveal
window.sr = ScrollReveal();
sr.reveal('.container-fluid');

// Countdown
var countdown = new Countdown({
    selector: '#timer',
    msgAfter: "Поздравляем!",
    leadingZeros: true,
    msgPattern: "{days} дней",
    dateEnd: new Date('2017/07/22 00:00')
    // onEnd: countdownEnd()
});

// function countdownEnd() {
// 	return alert('countdownEnd');
// }


// var myMap = document.getElementById('map');
// myMap.behaviors.disable('drag');

// Just to down
// setTimeout(window.scrollTo(0,document.body.scrollHeight), 1000);

// setTimeout((var mapFirstTag = document.getElementsByTagName('ymaps')[0]), 4000);
// setTimeout((mapFirstTag.style = ""), 6000);
