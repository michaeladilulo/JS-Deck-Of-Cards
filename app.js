function makeDeck() {
    const deck = [];
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A'

    for(let value of values.split(',')) {
        for(let suit of suits) {
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
}

function drawCard(deck) {
    return deck.pop();
}

const myDeck = makeDeck();
const card1 = drawDeck(myDeck);

// refactor of function above with object 
const myNewDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'spades', 'diamonds', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        initializeDeck() {
            const {suits, values, deck} = this;

            for(let value of values.split('')) {
                for(let suit of suits) {
                    deck.push({
                        value,
                        suit,
                        deck
                    })
                }
            }
        },
        drawSingleCard() {
            const card = this.deck.pop();
            this.drawnCards.push(card);
            return card; 
        },
        drawMultipleCards(numCards) {
            const cards = [];
            for(let i = 0; i < numCards.length; i++) {
                this.drawCard(this.drawSingleCard());
            }
            return cards;
        },

        // Fischer Yates Shuffle (used to shuffle array)

        shuffle() {
            const {deck} = this;
                // loop over array backwards
            for(let i = arr.length - 1; i > 0; i--) {
                // pick random index before current element
            let j = Math.floor(Math.random() * (i + 1))
                // shuffle
            [arr[i], arr[j]] = [arr[j], [arr[i]]]
            console.log(arr);
        }
    }
}