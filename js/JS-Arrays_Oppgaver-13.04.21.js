//Oppgave #1

var cars = ["Skoda", "Volvo", "BMW"];
cars.push("Tesla");
console.log(cars.length,cars[1]);

//Oppgave #2

var sheesh = [3,5,7,10,20];
console.log(sheesh.length,sheesh[2],sheesh[0]+sheesh[4],sheesh[0]+sheesh[1]+sheesh[2]+sheesh[3]+sheesh[4]);

//skal lage at sheesh blir summert og ikke plusset
function summer(ting) {
    
}

//Oppgave #3

var bang = [1,2,3,4,5,6,7,8,9,10]
for (i = 0; i < bang.length; i++) {
    bang.forEach(this*10)
}
console.log(bang);