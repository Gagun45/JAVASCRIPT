// #I2XsG6f
const rectSquare = (a, b) => a * b

// #ETGAxbEn8l
const circleSquare = r => Math.PI * r * r

// #Mbiz5K4yFe7
const cylinderSquare = (h, r) => 2 * Math.PI * r * h

// #SIdMd0hQ
const logArrayItems = (array) => {
    for (const item of array) {
        console.log(item)
    }
}

// #59g0IsA
const createPwithText = (text) => document.write(`<p>${text}</p>`)

//#hOL6126
const createULwithThreeLIsWithText = text => document.write(`
<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>
`)

//#0Kxco1edSN
const createULwithLIsWithText = (text, amount) => {
    const li = `<li>${text}</li>`
    document.write('<ul>')
    for (let i = 0; i < amount; i++) {
        document.write(li)
    }
    document.write('</ul>')
}

//#gEFoxMMO
const createListFromArray = items => {
    document.write('<ul>')
    for (const item of items) {
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>')
}

//#bovDJDTIjt
const writeUsers = (users) => {
    for (const user of users) {
        const div = `<div>${user.id} - ${user.name} - ${user.age}</div>`
        document.write(div)
    }
}

//#pghbnSB
const arrayMinValue = (numbers) => {
    let min = numbers[0]
    for (const number of numbers) {
        if (number<min) min=number
    }
    return min
}
//#EKRNVPM
const arraySum = (numbers) => {
    let sum = 0
    for (const number of numbers) {
        sum+=number
    }
    return sum
}

// #kpsbSQCt2Lf
const swap = (arr,index1,index2) => {
    const temp = arr[index1]
    arr[index1]=arr[index2]
    arr[index2]=temp
    return arr
}

//#mkGDenYnNjn
const  exchange = (sumUAH, currencyValues, exchangeCurrency)=> {
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

// console.log(exchange(10000, [{currency: 'USD', value: 20}, {currency: 'EUR', value: 10}], 'EUR'));
// console.log(exchange(10000, [{currency: 'USD', value: 20}, {currency: 'EUR', value: 10}], 'USD'));
// console.log(exchange(10000, [{currency: 'USD', value: 20}, {currency: 'EUR', value: 10}], 'asd'));