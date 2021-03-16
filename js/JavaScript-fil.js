var paragraph = document.getElementById("Top");
var date = new Date();
var hours = date.getHours();

if(hours >= 5 && hours < 12) {
paragraph.innerText = "Morgen";
}
if(hours >= 13 && hours < 17) {
    paragraph.innerText = "Ettermiddag";
}
if(hours >= 18 && hours < 24) {
    paragraph.innerText = "Kveld";
} 
if(hours >= 0 && hours < 4) {
    paragraph.innerText = "Natt";
}
console.log(hours);