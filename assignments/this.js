/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/window Binding: "This" refers to the window or console that you are using.
* 2. Implicit Function Binding: Points to the object the function is called on (to the left of the period/dot).
* 3. New Binding: "This" refers to the new object that is created with the keyword "new".
* 4. Explicit Function Binding: Tells the function exactly what "this" will be; ie..what object it will act on.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function bakeCake (){
    console.log (this.cake);
}
cake = "Red Velvet";
bakeCake ();

// Principle 2
// code example for Implicit Binding
let myVampire = {
    name: 'Vlad',
    blood: 'I vant to suck you blood!',
    vampire: function() {
        console.log(this.blood);
    }
}
myVampire.vampire(); //'I vant to suck you blood!'

// Principle 3
// code example for New Binding
function Person (name) {
    this.name=name;
}
let myPerson = new Person('Rebecca');
console.log(myPerson.name); //Rebecca



// Principle 4
// code example for Explicit Binding

function vampire() {
    console.log (this.blood);
}
let myVampire2 = {
    name: 'Vlad',
    blood: 'I vant to suck you blood!'
}
vampire.call(myVampire2); //'I vant to suck you blood!'
