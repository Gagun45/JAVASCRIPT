function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let rate;
    let i = 0
    while (i < currencyValues.length) {
        const curr = currencyValues[i]
        if (curr.currency === exchangeCurrency) {
            rate = curr.value
            break;
        }
        i++
    }
    if (rate===undefined) return 'Wrong currency input'

    return (sumUAH / rate).toFixed(2)
}

console.log(exchange(10000, [{currency: 'USD', value: 20}, {currency: 'EUR', value: 10}], 'EUR'));
console.log(exchange(10000, [{currency: 'USD', value: 20}, {currency: 'EUR', value: 10}], 'USD'));
console.log(exchange(10000, [{currency: 'USD', value: 20}, {currency: 'EUR', value: 10}], 'asd'));