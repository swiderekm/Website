function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getTime() {
    var now = new Date();
    var a = now.getHours();
    var b = now.getMinutes();
    var c = now.getSeconds();
    a = checkTime(a);
    b = checkTime(b);
    c = checkTime(c);
    var time = a + ':' + b + ':' + c;
    document.getElementById('zegar').innerHTML = time;
}

function onSite(){
    getTime();
    setInterval(getTime, 1000);
}