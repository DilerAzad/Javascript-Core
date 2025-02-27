function updateTime(){
    const date = new Date()
    let hours = date.getHours();
    hours = hours%12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);
    const ampm = hours >= 12 ? 'AM' : 'PM';
    const time = document.getElementById("clock");

    time.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;
}

updateTime();
setInterval(updateTime, 1000);