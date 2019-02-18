alert("hello world");

//message box
var a
var b = 10;
a = 100;

alert(a);

var text = "Your name here";
alert(text);

//using vars with basic algebra

//addition
var a = 1000;
var b = a + 200;
//alert(b);

//substraction
var c = 100 - 50;
//alert(c);

// multiplication
var m = c * 10;
//alert(m);

//division
var d = 500 / 2;
// alert(d);

//mix
var combo = 100 + 50 / 2 * 10;
// alert(combo);

//simple calculator
// from celsius to F
// C x 9/5 + 32 = F
var C = 35;
var F = C * 9 / 5 + 32;
// alert(F);

//intro console logging
var a = 1;
var b = 5;

var c = a + b;
console.log(c);

// PLayer module
// var player = new Object();
var player = {
    name: 'JP', 
    energy: 100, 
    lives: 2 ,
    x: 19, y: 100, 
    color: 'blue' 
};


console.log(player);
console.log(player.name);
console.log(player['color']);

player.name = 'cory';
console.log(player.name);

player.friend = {name: 'Pablo'};
player.weapon = 'sword';


    //concatenating strings
    var title = "Mr";
    var name = "Pable";
    var sentence = "Hello " + title + " " + name;
    console.log(sentence);

    //to upper case
    var s = sentence.toUpperCase();

    //to lower case
    var l = sentence.toLowerCase();

    //getting a part of a string
    var a = "Hello World JavaScript";
    var b;

    b = a.slice(6, 11);

            // working with Arrays

    
            // var shoppingList = new Array();
            var shoppingList = ['bread', 'carrots', 'fish'];
            console.log(shoppingList); 
            
            var a = shoppingList[1];
            console.log(a);

            shoppingList[2] = 'chicken';

            var enemies = [{x:10, y:10, color: 'blue'},{x:100, y:100, color: 'red'}];

            var l = [1, 'asdergf', 22.54, {name: 'hello'}];
            l[1] = 'Hello';

            //adding and removing elemets from arrays

            var weapons = ['sword', 'laser gun', 'stick', 'axe']

            //array legnth
            console.log(weapons.lenght);

            //push()
            weapons.push('knife', 'laser knife');

            //pop()
            weapons.pop();

            //splice()
            weapons.splice(1, 0, 'bomb', 'BnA');
            
            console.log(weapons);
            
            // Mutli D arrays

            var a =[23 , 33 ,['a', 22,[3, 4, 5]], 32];

            a[2][2][1] = 10;

            console.log(a);

            // arrays and objects

            var enemies = [
                {x: 10, y: 50, energy: 100},
                {x: 11, y: 55, energy: 1},
                {x: 12, y: 50, energy: 50},
                {x: 13, y: 55, energy: 30},
                {x: 14, y: 50, energy: 20}
            ];

            enemies[3].energy = 12;

            var player = {
                name: 'Tim',
                energy: 10,
                weapons: ['sword', 'gun', 'club']
            };

            //add a new weapon
            player.weapons.push('axe');

            console.log(player); 
            
            //functions
                //If you var here it becomes global.

                var factor = 100;
                var c = 1;      //GLOBAL VAR
                //1 meter is 100 cm
                function converter(m) {
                    var c = m * factor;     //LOCAL VAR
                    return c;
                //If you var here it becomes local
                //but if you remove the var it will use the GLOBAL c variable.
                }
                
                
                //Nested functions
                var result = converter(10);
                console.log(result);
            
                console.log(c);

                function showEverywhere(text) {

                    function decorate(a){
                        return "####--- " + a + " ---###";
                    };
                    
                    text = decorate(text)
    
                    console.log(text);
                    alert(text);
                };
                
                showEverywhere("Hello world");


                //Methods
                var player = {
                weapons: ['sword', 'gun'],
                addWeapon: function(newWeapon){
                    this.weapons.push(newWeapon);
                },
                addEnergy: function(e) {
                    this.energy = this.energy + e; 
                }
            };


                player.addWeapon('axe');
                player.addWeapon('laser gun ');
                player.addWeapon('knife');
                player.addWeapon('pickaxe');
                
                console.log(player.weapons);
                
                player.addEnergy(10);
                console.log(player.energy);


                //Function Expressions

                var fly = function() {
                    console.log('you are flying');
                };
    
                fly(); 
    
            var player = {
                x:100,
                y:200,
                energy:10,
                superpower: function() {
                    console.log('no superpower');
                }
            };
            player.x = 100
    
            player.superpower = fly;
            player.superpower();
            
            // Canvas
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");

            ctx.fillStyle = "rgb(200, 0, 200)";
            ctx.fillRect(50, 40, 100, 30); // You start top left corner
                    // x, y, width, height
            ctx.fillStyle = "rgb(100, 100, 200)"; //the first fillStyle will be used by the Rect
            ctx.fillRect(50, 140, 100, 30);


            //animeted canvas

            var x = 10;
            var y = 10;
            var w = 20;
            var h = 30;

            var speed = 2;

            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");

            var update = function() {
                x = x + speed;

            };

            var draw = function() {
                ctx.clearRect(0, 0, 500, 300);
                ctx.fillStyle = "rgb(200, 0, 100)";
                ctx.fillRect (x, y, w, h);
            };

        var step = function() {

            update();
            draw();

            window.requestAnimationFrame(step);

        };

        step();
        
