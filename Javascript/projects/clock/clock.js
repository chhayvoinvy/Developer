// Clock


function updateClock() {
    const date = new Date();
    const _minites = date.getMinutes().toString().padStart(2,0);
    const _seconds = date.getSeconds().toString().padStart(2,0);
    let _hours = date.getHours().toString().padStart(2,0);
    if(_hours > 12) {
        _hours -= 12;
    }
    let meridiem = _hours >= 12 ? "AM" : "PM";
    const t_string = `${_hours}:${_minites}:${_seconds} ${meridiem}`;

    document.getElementById('display').textContent = t_string;

    console.log(meridiem);
}

setInterval(updateClock, 1000);
