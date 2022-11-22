let dollar = document.getElementById('dollar');
let euro = document.getElementById('euro');


dollar.onkeyup = function(){
    euro.value = dollar.value * 10.3;
}

euro.onkeyup = function (){
    dollar.value = euro.value * 10.3;
}