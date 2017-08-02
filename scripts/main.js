/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

let test = ["3", "4", "5"];
let total = 0;
let array = [];
let card1 = 0;
function handValue (test) {

for (let i = 0; i < test.length; i++) {
  card1 = parseInt(test[i]);
  array.push(card1);
  total += array[i];
}
  return total;
}


// console.log(handValue(["3", "4", "5"]));

// console.log(handValue(["3", "4", "5"]));
console.log(handValue(["3", "4", "K"]));

if(hand[i] === "K") {
  card1 = 10;
}







/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/









//   let cards = [ "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ];
//   hand =
//   if hand[i] === 10;
//   let cards["A"] = ()
//   if hand <= 10 {
//     cards("A") = 11;
//   }
//   else if (hand >= 10) {
//       let card["A"] = 1;
//   }
//
//   sum.hand =
// console.log(hand);
//
// function getSum(hand, num) {
//     return total + num;
// }



// let ["K", "Q", "J"] = 10;
// let ["A"] = 1 || 11;
// let output = ?;
// build callback for if result > 21 return 1 else if <

  // hand = [cards[0], cards[1], cards[2]];
  // // let result = hand[]
  // "K", "Q", "J" === "10"
  // "A" = "1"
  // return handValue(hand);
  // console.log("K");
