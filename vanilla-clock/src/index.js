/* Javascript은 이 파일에서만 작성해주세요. */

function clock () {
    var currentDate = new Date();
    var currentHours = currentDate.getHours();
    var currentMinutes = currentDate.getMinutes();
    var currentSeconds = currentDate.getSeconds();

    if (currentHours > 12) {
        currentHours = currentHours - 12;  
    }

    var h = (currentHours * 30) - 90;
    var m = (currentMinutes * 6) - 90;
    var s = (currentSeconds * 6) - 90;

    document.getElementById('hou').style.transform = "rotate(" + h + "deg)";
    document.getElementById('min').style.transform = "rotate(" + m + "deg)";
    document.getElementById('sec').style.transform = "rotate(" + s + "deg)";

}

var timer = setInterval(function () {
    clock();
}, 1000);
