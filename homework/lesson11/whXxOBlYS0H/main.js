fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(({recipes})=> {
        const h1 = document.createElement('h1')
        h1.innerText='Recipes from dummyjson'
        document.body.appendChild(h1)
        for (const recipe of recipes) {
            const recipeDiv = document.createElement('div')
            recipeDiv.classList.add('recipeDiv')

            const h2 = document.createElement('h2')
            h2.innerText=`Name: ${recipe.name}`

            const id = document.createElement('p')
            id.innerText=`Recipe ID: ${recipe.id}`

            const difficulty = document.createElement('span')
            difficulty.innerText=`Difficulty: ${recipe.difficulty}`

            const image = document.createElement('img')
            image.src=recipe.image


            const ingredientsList = document.createElement('ul')
            for (const ing of recipe.ingredients) {
                const li = document.createElement('li')
                li.innerText=ing
                ingredientsList.appendChild(li)
            }

            const userId = document.createElement('span')
            userId.innerText=`Ordered by userId: ${recipe.userId}`

            recipeDiv.append(h2, id ,difficulty, image, ingredientsList, userId)

            document.body.appendChild(recipeDiv)
        }
    });