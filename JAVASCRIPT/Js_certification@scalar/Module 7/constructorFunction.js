//Without Constructor we have to type again and again how much objects we want.
let car1 = {
    name : 'X4',
    company : 'BMW',
    color : 'Red'
}
 let car2 = {
    name : 'S-class',
    company : 'Mercedes',
    color : 'Black'
 }

 //INSTEAD we create a template .Which is a Constructor Function.
//Constructor Function :
 function createCar(_name, _company ,_color){
    this.name = _name;
    this.comapny = _company;
    this.color = _color;

    this.drive = function(){
        console.log(`I am driving ${this.name} and  it is of ${this.color} color`);
    }
 }

 let car3 = new createCar('X4','BMW','Red');
 let car4 = new createCar('S-class','Mercedes','Black');

 console.log(car3);
 console.log(car4);
 car3.drive(); //calling function inside an object;