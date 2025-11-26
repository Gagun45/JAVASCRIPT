function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let rate;
    let found = false
    let i = 0
    while (i < currencyValues.length && !found) {
        const curr = currencyValues[i]
        if (curr.currency === exchangeCurrency) {
            rate = curr.value
            found = true
            break;
        }
        i++
    }
    if (!found) return 'Wrong currency input'

    return (sumUAH / rate).toFixed(2)
}

console.log(exchange(10000, [{currency: 'USD', value: 15}, {currency: 'EUR', value: 42}], 'EUR'));