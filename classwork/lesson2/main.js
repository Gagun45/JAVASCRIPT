{
    // #67kfznmiMl
    let array = [1, 2, '3', 'hello', true, false, [1, 2], {}, null, undefined]
    console.log(array[0])
    console.log(array[1])
    console.log(array[2])
    console.log(array[3])
    console.log(array[4])
    console.log(array[5])
    console.log(array[6])
    console.log(array[7])
    console.log(array[8])
    console.log(array[9])
}
{
//     #LARqoUj5I
    const book1 = {
        title: 'Harry Potter',
        pageCount: 300,
        genre: 'Fantasy'
    }
    const book2 = {
        title: 'Lord of The Rings',
        pageCount: 600,
        genre: 'Fantasy'
    }
    const book3 = {
        title: 'Hobbit',
        pageCount: 250,
        genre: 'Adventure'
    }
}
{
//     #sA3Gg1sCp
    const book1 = {
        title: 'Harry Potter',
        pageCount: 300,
        genre: 'Fantasy',
        authors: [
            {name: 'J.K. Rowling', age: 50},
            {name: "Vasya", age: 24}
        ]
    }
    const book2 = {
        title: 'Lord of The Rings',
        pageCount: 600,
        genre: 'Fantasy',
        authors: [
            {name: 'J.R.R. Tolkien', age: 80},
            {name: "Petya", age: 50},
            {name: "Mariia", age: 15}
        ]
    }
    const book3 = {
        title: 'Hobbit',
        pageCount: 250,
        genre: 'Adventure',
        authors: [
            {name: 'J.R.R. Tolkien', age: 80},
            {name: "Sasha", age: 40},
            {name: "Bohdan", age: 28}
        ]
    }
}
{
//     jCHFnEbdmFd
    const users = [
        {name: 'name1', username: 'username1', password: 'password1'},
        {name: 'name2', username: 'username2', password: 'password2'},
        {name: 'name3', username: 'username3', password: 'password3'},
        {name: 'name4', username: 'username4', password: 'password4'},
        {name: 'name5', username: 'username5', password: 'password5'},
        {name: 'name6', username: 'username6', password: 'password6'},
        {name: 'name7', username: 'username7', password: 'password7'},
        {name: 'name8', username: 'username8', password: 'password8'},
        {name: 'name9', username: 'username9', password: 'password9'},
        {name: 'name10', username: 'username10', password: 'password10'},
    ]
    console.log(users[0])
    console.log(users[1])
    console.log(users[2])
    console.log(users[3])
    console.log(users[4])
    console.log(users[5])
    console.log(users[6])
    console.log(users[7])
    console.log(users[8])
    console.log(users[9])
    console.log(users[10])
}
{
    // #coYydZuaeEB
    const tempInfo = [
        {
            day: 1,
            morningT: 12,
            afternoonT: 15,
            eveningT: 13
        }, {
            day: 2,
            morningT: 14,
            afternoonT: 19,
            eveningT: 12
        }, {
            day: 3,
            morningT: 22,
            afternoonT: 15,
            eveningT: 12
        }, {
            day: 4,
            morningT: 12,
            afternoonT: 15,
            eveningT: 13
        }, {
            day: 5,
            morningT: 12,
            afternoonT: 15,
            eveningT: 13
        }, {
            day: 6,
            morningT: 12,
            afternoonT: 15,
            eveningT: 13
        }, {
            day: 7,
            morningT: 12,
            afternoonT: 15,
            eveningT: 13
        },
    ]
}
{
//     bAUsaq6LI
    let x = 1
    if (x !== 0) {
        console.log('Virno')
    } else {
        console.log('Nevirno')
    }
}
{
//     #3ckURgvs
    const time = 24
    if (time < 0) console.log('Wrong input<0')
    else if (time < 15) console.log(1)
    else if (time < 30) console.log(2)
    else if (time < 45) console.log(3)
    else if (time < 60) console.log(4)
    else console.log('Wrong input')
}
{
//     UMoNq4biWGe
    const day = 24
    if (day < 0) console.log('Wrong input<0')
    else if (day < 11) console.log(1)
    else if (day < 21) console.log(2)
    else if (day < 32) console.log(3)
    else console.log('Wrong input')
}
{
//     KzrtqyQ
    const schedule = [
        {day: 1, info: "Monday"},
        {day: 2, info: "Tuesday"},
        {day: 3, info: "Wednesday"},
        {day: 4, info: "Thursday"},
        {day: 5, info: "Friday"},
        {day: 6, info: "Saturday"},
        {day: 7, info: "Sunday"},
    ]
    const x = +prompt('Enter day number (1-7)')
    const isXValid = x > 0 && x <= 7
    switch (isXValid) {
        case true:
            console.log(schedule[x - 1].info)
            break;
        default:
            console.log('Wrong input')
            break;
    }
}
{
// uwsz1RnTQJ1
    const num1 = +prompt('Enter 1st number: ')
    const num2 = +prompt('Enter 2nd number: ')
    if (num1 > num2) console.log(`${num1} is > than ${num2}`)
    else if (num2 > num1) console.log(`${num2} is > than ${num1}`)
    else if (num1 === num2) console.log(`${num1} equals ${num2}`)
    else console.log("Wrong input")
}
{
//     iBvqtjEm
    let value = ''
    if (!value) value='default'
    console.log(value)
}