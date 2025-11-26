{
    // #I2XsG6f
    function rectSquare(a, b) {
        return a * b
    }
}

{
//     #ETGAxbEn8l
    function circleSquare(r) {
        return Math.PI * r * r
    }
}

{
//     #Mbiz5K4yFe7
    function cylinderSquare(h, r) {
        return h * 2 * Math.PI * r
    }
}

{
//     #SIdMd0hQ
    function logArray(array) {
        for (const item of array) {
            console.log(item)
        }
    }
}

{
//     #59g0IsA
    function writeParagraph(text) {
        document.write(`<p>${text}</p>`)
    }
}

{
//     #hOL6126
    function threeLIs(text) {
        document.write('<ul>')
        for (let i = 0; i < 3; i++) {
            document.write(`<li>${text}</li>`)
        }
        document.write('</ul>')
    }
}

{
//     #0Kxco1edSN
    function createLIs(text, numOfLIs) {
        document.write('<ul>')
        for (let i = 0; i < numOfLIs; i++) {
            document.write(`<li>${text}</li>`)
        }
        document.write('</ul>')
    }
}

{
//     #gEFoxMMO
    function foobar(array) {
        document.write('<ul>')
        for (const item of array) {
            document.write(`<li>${item}</li>`)
        }
        document.write('</ul>')
    }
}

{
//     #bovDJDTIjt
    function foobar(users) {
        for (const user of users) {
            const div = `<div>
<h2>${user.id}</h2>
<p>${user.name}</p>
<span>${user.age}</span>
</div>`
            document.write(div)
        }
    }
}

{
//     #pghbnSB
    function foobar(numbers) {
        let min = numbers[0];
        for (const number of numbers) {
            if (number < min) {
                min=number
            }
        }
        console.log(min)
    }
}
{
//     #EKRNVPM
    function sum(arr) {
        let sum = 0
        for (const num in arr) {
            sum+=num
        }
        return sum
    }
}

{
//     #kpsbSQCt2Lf
    function swap(arr,index1,index2) {
        const temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
        return arr
    }

    console.log(swap([1, 2, 3, 4], 0, 1));
}