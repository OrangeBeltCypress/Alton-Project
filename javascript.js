setInterval(setclock, 1000)

const hourhand = document.querySelector('[data-hour-hand]')
const minutehand = document.querySelector('[data-minut-hand]')
const secondhand = document.querySelector('[data-second-hand]')


function setclock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursratio = (minutesRatio + currentDate.getHours()) / 12
    setrotation(secondhand, secondsRatio)
    setrotation(minutehand, minutesRatio)
    setrotation(hourhand, hoursratio)
}
function setrotation(element, rotationratio) {
    element.style.setProperty('--rotation', rotationratio * 360)
}
setclock()
