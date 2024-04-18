var name = prompt("Adınız nedir?:");
var myNameElement = document.getElementById("myName");
myNameElement.textContent = name;

function showTime() {
    var time = new Date();

    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var dayIndex = time.getDay();
    var day = days[dayIndex];

    var myClockElement = document.getElementById("myClock");
    myClockElement.textContent =  hour + ":" + minute + ":" + second + " " + day;

    setTimeout(showTime, 1000); 
}

showTime();