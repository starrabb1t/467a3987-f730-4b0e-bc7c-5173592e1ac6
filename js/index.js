const s = "1240956186:AAHgd5f1UElcBU2awnjdanotCF7XeV-cE_I";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const order_id = urlParams.get('order_id');
const contractor = urlParams.get('contractor');

_order_id.innerText = order_id;
_contractor.innerText = contractor;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    console.log("Geolocation is not supported by this browser")
}

var lat = null;
var lon = null;

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
}

function in_transit() {
    var text = `Заказ : ${order_id}%0AВодитель : ${contractor}%0AСтатус : ${"В пути"}%0AКоординаты : (${lat},${lon})%0A`;
    _status.innerText = text;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("success");
        }
    };
    xhttp.open("GET", `https://api.telegram.org/bot${s}/sendMessage?chat_id=-704349495&text=${text}`, true);
    xhttp.send();
}

function on_success() {
    text = `Заказ : ${order_id}%0AВодитель : ${contractor}%0AСтатус : ${"Доставлено"}%0AКоординаты : (${lat},${lon})%0A`;
    _status.innerText = text;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("success");
        }
    };
    xhttp.open("GET", `https://api.telegram.org/bot${s}/sendMessage?chat_id=-704349495&text=${text}`, true);
    xhttp.send();
}

function on_incident() {
    text = `Заказ : ${order_id}%0AВодитель : ${contractor}%0AСтатус : ${"ИНЦИДЕНТ!"}%0AКоординаты : (${lat},${lon})%0A`;
    _status.innerText = text;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("success");
        }
    };
    xhttp.open("GET", `https://api.telegram.org/bot${s}/sendMessage?chat_id=-704349495&text=${text}`, true);
    xhttp.send();
}