/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/

function sandwichMaker() {

  let order = ["One sandwich with tomato"] //put string into array to be able to push 'sentence' into it.

  return function (string) { //the string is the arguement
    let sentence = "and " + string; // "and" is added in front of the string arguement
    order.push(sentence); //This pushes sentence variable inside the array
    return (order.join(' ')); //returning and joing to remove the array and bring back to string.

  }

}

let sandwich = sandwichMaker(); // => returns a function

console.log(sandwich("spinach")) // => "One sandwich with tomato and spinach"
console.log(sandwich("jelly")) // => "One sandwich with tomato and spinach and jelly"
console.log(sandwich("bread")) // => "One sandwich with tomatod" and spinach and jelly and brea

//Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
console.log(sandwich2("pb")) // => "One sandwich with tomato and pb"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sandwichMaker;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
