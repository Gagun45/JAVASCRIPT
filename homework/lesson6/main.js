//     #bolvdlhP
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
const cardSuites = ['spade', 'diamond', 'heart', 'clubs']
const cards = []
values.forEach(value => {
    cardSuites.forEach(suit => {
        if (suit === 'spade' || suit === 'clubs') cards.push({value, suit, color: 'black'})
        else cards.push({value, suit, color: 'red'})
    })
})
console.log(cards)

const aceSpade = cards.find(card => card.value === 'ace' && card.suit === 'spade')
console.log(aceSpade);

const allSixs = cards.filter(card => card.value === '6')
console.log(allSixs)

const allReds = cards.filter(card => card.color === 'red')
console.log(allReds);

const allDiamonds = cards.filter(card => card.suit === 'diamond')
console.log(allDiamonds);

const valuesFromNine = values.slice(3)
const clubsFromNine = cards.filter(card => valuesFromNine.includes(card.value) && card.suit === 'clubs')
console.log(clubsFromNine);

// #EP5I1UUzAX

const sortedDeck = cards.reduce((acc, card) => {
    switch (card.suit) {
        case 'spade':
            acc.spades.push(card)
            break
        case 'diamond':
            acc.diamonds.push(card)
            break
        case 'heart':
            acc.hearts.push(card)
            break
        case 'clubs':
            acc.clubs.push(card)
            break
    }

    return acc
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
})
console.log(sortedDeck);