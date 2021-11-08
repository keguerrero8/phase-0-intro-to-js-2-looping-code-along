// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

function writeCards(arrayName, stringName) {
    let newArray = []
    let message = ""
    for (let i =0 ; i < arrayName.length; i++) {
        message = `Thank you, ${arrayName[i]}, for the wonderful ${stringName} gift!`
        newArray.push(message)
    }
    return newArray
}

function countDown(number) {
    let i = 10
    while (i > -1) {
        console.log(i)
        i--
    }
}

//console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"))
//wrapGifts(gifts);
//writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' ) 