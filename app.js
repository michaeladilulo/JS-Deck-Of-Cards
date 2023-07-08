function makeDeck() {
    const deck = [];
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = '1,2,3,4,5,6,7,8,9,10,J,Q,K,A'

    for(let value of values.split(',')) {
        for(let suit of suits) {
            deck.push({
                value,
                suit
            })
        }
    }
}