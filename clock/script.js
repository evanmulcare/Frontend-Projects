setInterval(setClock, 1000)
setInterval(digitalClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')


function set() {
    if (document.getElementById('set').style.opacity == 1)
    {
        document.getElementById('set').style.opacity = 0;
    }
    else
    {
        document.getElementById('set').style.opacity = 1;
    }
}

function outputresult() {
var x, y;
x = document.getElementById('inputform');
y = x.elements['hour'].value;
if(y == 5)
    {
        document.getElementById('container').style.opacity = 0;
        document.getElementById('cool').style.opacity = 1;
       
        document.getElementById("typed").innerHTML="Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party Time Party";
    } else {
        document.getElementById("subtext").innerHTML="Please, I beg You.";
    }

}

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

function digitalClock() {
    const currentDate = new Date();
    const hrs = currentDate.getHours();
    const min =  String(currentDate.getMinutes()).padStart(2, '0');
    const session = document.getElementById('session');

    if (hrs >= 12){
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    document.getElementById('digital-hour').innerHTML = hrs
    document.getElementById('digital-minute').innerHTML = min
}

setClock()
digitalClock()