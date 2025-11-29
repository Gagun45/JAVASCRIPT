fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(cartsObject=>{
    const {carts} = cartsObject
        console.log(carts);
        for (const cart of carts) {
            const div = document.createElement('div')
            div.style.border='1px solid black'
            div.style.marginBottom='3px'
            const id = document.createElement('p')
            id.innerText = `Cart ID - ${cart.id}`

            const discountedTotal = document.createElement('p')
            discountedTotal.innerText = `Discounted total: ${cart.discountedTotal}`

            const total = document.createElement('p')
            total.innerText = `Total - ${cart.total}`

            const totalQuantity = document.createElement('p')
            totalQuantity.innerText = `Total quantity - ${cart.totalQuantity}`

            const userId = document.createElement('p')
            userId.innerText = `User ID - ${cart.userId}`

            const productsUL = document.createElement('ul')
            for (const {id, title, price} of cart.products) {
                const li = document.createElement('li')
                li.innerText=`${id} - ${title} - ${price}`
                productsUL.appendChild(li)
            }


            div.append(id,discountedTotal, total, totalQuantity, userId, productsUL)

            document.body.appendChild(div)
        }
})