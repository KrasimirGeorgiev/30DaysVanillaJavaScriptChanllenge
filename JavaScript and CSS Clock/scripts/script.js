const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');


function setDate() {
    const timeNow = new Date();
      
    const seconds = timeNow.getSeconds();
    const secondsToDegrees = ((seconds/60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsToDegrees}deg)`;

    const mins = timeNow.getMinutes();
    const minsToDegrees = ((mins / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minsToDegrees}deg)`;

    const hours = timeNow.getHours();
    const hoursToDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursToDegrees}deg)`;
}

setInterval(setDate, 1000);