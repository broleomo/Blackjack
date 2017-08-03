/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


  // let handTotal = [];
// let card1 = 0;
function handValue (hand) {
    let card = 0;
    let total = 0;
  // creating a loop for variables within the hand
for (let i = 0; i < hand.length; i++) {
  if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J"){
    card = 10;
    total = total + card;
  } else if (hand[i] === "A") {
      if (total >= 11) {
        card = 1;
        total = total + card;
      } else {
        card = 11
        total = total + card;
        }
      } else {
        card = hand[i];
        total = total + parseInt(card);
        }
      }
      // if someone has an A in their hand and end up busting, subtract 10 from tht total
for (let i = 0; i < hand.length; i++) {
    if (total > 21 && hand[i] === "A") {
      total = total - 10;
    }
    }
    return total;
  }
  // console.log(handValue(["4","4","8"]));
  // console.log(handValue(["4","A","2"]));
  // console.log(handValue(["4","Q","J"]));
//   }
// }

//
// if (total > 21) {
//   return "Bust";
//   }
//   return total;
// }







//
// // console.log(handValue(["3", "4", "5"]));
//
// // console.log(handValue(["3", "4", "5"]));
// console.log(handValue(["3", "4", "K"]));
//
// if(hand[i] === "K") {
//   card1 = 10;
// }
//






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
