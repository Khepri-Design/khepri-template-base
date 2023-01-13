if (eventItem = document.getElementById('eventCountdown')) {
    updateEventTimer();
    function updateEventTimer() {
        currentDate = new Date();

        eventData = eventItem.getAttribute('data-dateTime')

        //escape date for Safari
        eventData = eventData.replace(/ /g, "T");
        eventDate = Date.parse(eventData);


        diff = eventDate - currentDate;
        
        days = Math.floor(diff / (1000 * 60 * 60 * 24));
        hours = Math.floor(diff / (1000 * 60 * 60));
        mins = Math.floor(diff / (1000 * 60));
        secs = Math.floor(diff / 1000);

        d = days;
        h = hours - days * 24;
        m = mins - hours * 60;
        s = secs - mins * 60;

        if (Math.sign(diff) === -1) {
            d = 0;
            h = 0;
            m = 0;
            s = 0;
        }

        eventItem.getElementsByClassName('kd-counter-unity-days-count')[0].innerHTML = d;
        eventItem.getElementsByClassName('kd-counter-unity-hours-count')[0].innerHTML = h;
        eventItem.getElementsByClassName('kd-counter-unity-minutes-count')[0].innerHTML = m;
        eventItem.getElementsByClassName('kd-counter-unity-seconds-count')[0].innerHTML = s;
    } setInterval('updateEventTimer()', 1000);
}
