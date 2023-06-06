document.getElementById("text");
document.getElementsByClassName("box8");
document.getElementsByTagName("h2");
document.getElementById("txt").innerHTML = "Hello World";

function hello() {
    document.getElementById("hello").innerHTML = "Welcome Evelation Academy";
}

function heading() {
    document.getElementById("heading").style.color = "red";
}

let count = 0;

function direction() {

    if (count === 0) {
        document.getElementById("change").style.flexDirection = "column";
        count++;
        console.log(count);
    } else {
        document.getElementById("change").style.flexDirection = "row";
        count--;
        console.log(count);
    }


}




setInterval(myfunction, 1);
const myelement = document.getElementById("time");

function myfunction() {
    var dateobj = new Date();
    var hour = dateobj.getHours();
    var minute = dateobj.getMinutes();
    var second = dateobj.getSeconds();
    var miliSeconds = dateobj.getMilliseconds();
    var ampm = "AM";
    if (hour >= 12) {
        hour -= 12;
        ampm = "PM";
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    myelement.innerHTML = hour + " : " + minute + " : " + second + " : " + miliSeconds + " " + ampm;


}