//In JS, for-in Loop allows you to loop through the properties of an Object.

//for-in loop with Objects:
var colors = {
    primary : 'Blue',
    seccondary : 'Red',
    tertiary : 'White'
}

for(var color in colors){
    console.log(color + ' -> '+colors[color]);//gets the 'key' and 'value' of object
}

//for-in loop with Arrays :

var colorsArray = ['Yellow','Green','Orange','Pink'];

for(var color in colorsArray){
    console.log(color + ' -> '+colorsArray[color]);//gets the index and value
}