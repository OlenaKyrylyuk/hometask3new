$(window).on('load', function() {
    var $preloader = $('#prealoder'),
        $svg_anm = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});




function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        const t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 5 * 24 * 60 * 60 * 1000); 
initializeClock('clockdiv', deadline);


const columnOne = document.querySelector('.columnOne');
 
const btnOne = document.querySelector('.btnOne');
btnOne.addEventListener('click', clickMe);
function clickMe() {
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque magnam tenetur odio eum consectetur! Magni, facere, dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque magnam tenetur odio eum consectetur! Magni, facere, dolor.';
  
       columnOne.appendChild(p);
}


const columnTwo = document.querySelector('.columnTwo');
const btnTwo = document.querySelector('.btnTwo');
btnTwo.addEventListener('click', clickMe);
function clickMe() {
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque magnam tenetur odio eum consectetur! Magni, facere, dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque magnam tenetur odio eum consectetur! Magni, facere, dolor.';
      columnTwo.appendChild(p);
}
const columnThree= document.querySelector('.columnThree');
const btnThree = document.querySelector('.btnThree');
btnThree.addEventListener('click', clickMe);
function clickMe() {
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque magnam tenetur odio eum consectetur! Magni, facere, dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque magnam tenetur odio eum consectetur! Magni, facere, dolor.';
      columnThree.appendChild(p);
}



const columnFour = document.querySelector('.columnFour');
const btnFour = document.querySelector('.btnFour');
btnFour.addEventListener('click', clickMe);
function clickMe() {
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque magnam tenetur odio eum consectetur! Magni, facere, dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque magnam tenetur odio eum consectetur! Magni, facere, dolor.';
      columnFour.appendChild(p);
}

const columnFive = document.querySelector('.columnFive');
const btnFive = document.querySelector('.btnFive');
btnFive.addEventListener('click', clickMe);
function clickMe() {
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque magnam tenetur odio eum consectetur! Magni, facere, dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque magnam tenetur odio eum consectetur! Magni, facere, dolor.';
      columnFive.appendChild(p);
}
const columnSix = document.querySelector('.columnSix');
const btnSix = document.querySelector('.btnSix');
btnSix.addEventListener('click', clickMe);
function clickMe() {
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque magnam tenetur odio eum consectetur! Magni, facere, dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque magnam tenetur odio eum consectetur! Magni, facere, dolor.';
      columnSix.appendChild(p);
}

