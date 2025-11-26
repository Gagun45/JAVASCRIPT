// {
//     // #y7crMeFwHcS
//     for (let i=0;i<10;i++) {
//         const div = `<div>Random text</div>`
//         document.write(div)
//     }
// }

// {
// //     #TYj7ncx
//     for (let i=0;i<10;i++) {
//         const div = `<div>div - ${i}</div>`
//         document.write(div)
//     }
// }

// {
// //     uzkt71dp
//     let i = 0;
//     while (i<20) {
//         const h1 = `<h1>H1 title</h1>`
//         document.write(h1)
//         i++
//     }
// }

// {
// //     OeT7t3uUMFi
//     let i = 0;
//     while (i<20) {
//         const h1 = `<h1>H1 title - ${i}</h1>`
//         document.write(h1)
//         i++
//     }
// }

// {
// //     vLSZKMlO
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js']
//     document.write('<ul>')
//     for (let item of listOfItems) {
//         const li = `<li>${item}</li>`
//         document.write(li)
//     }
//     document.write('</ul>')
// }
// {
//     // Hdjws7E
//     let products = [
//         {
//             title: 'milk',
//             price: 22,
//             image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//         },
//         {
//             title: 'juice',
//             price: 27,
//             image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//         },
//         {
//             title: 'tomato',
//             price: 47,
//             image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//         },
//         {
//             title: 'tea',
//             price: 15,
//             image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//         },
//     ];
//     for (let product of products) {
//         const div = `<div class="product-card">
// <h3>${product.title}. Price - ${product.price}</h3>
// <img src="${product.image}" alt="" class="product-image">
// </div>`
//         document.write(div)
//     }
// }

// {
// //     4WrHwFTEop0
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
//     console.log('STATUS = true')
//     for (const user of users) {
//         if (user.status) console.log(user)
//     }
//     console.log('')
//     console.log('STATUS = false')
//     for (const user of users) {
//         if (!user.status) console.log(user)
//     }
//     console.log('')
//     console.log('Age > 30')
//     for (const user of users) {
//         if (user.age>30) console.log(user)
//     }
// }