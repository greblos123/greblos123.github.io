function playgame(user) {
    var results = ["rock","paper","scissors"];
    var rand = Math.floor(Math.random()*3);
    console.log(results[rand]);
    document.getElementById("datasvar").src="images/"+results[rand]+".png";
}
if(playgame == rand){
    document.getElementById("text").innerText = "Uavgjort!"
}