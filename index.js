const friendNames = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, events) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }

    return cards;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num --;
    }
}
 
countDown(10)
