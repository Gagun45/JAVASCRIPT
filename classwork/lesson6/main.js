// #dFeorS3m7u
console.log('hello world'.length)
console.log('lorem ipsum'.length)
console.log('javascript is cool'.length)
{
// #8lld9HMxXWB
    const s1 = 'hello world'.toUpperCase()
    const s2 = 'lorem ipsum'.toUpperCase()
    const s3 = 'javascript is cool’'.toUpperCase()
}

{
//     ClDsAm7xba7
    const s1 = 'HELLO WORLD'.toLowerCase()
    const s2 = 'LOREM IPSUM'.toLowerCase()
    const s3 = 'JAVASCRIPT IS COOL'.toLowerCase()
}

{
//     0b89BkYZwu
    const str = ' dirty string   '
    const trimmed = str.trim()
}
{
//     #bfoJuse4ZzP
    function stringToArray(str) {
        if (typeof str === 'string') return str.split(' ')
        return ['']
    }

    console.log(stringToArray('Ревуть воли як ясла повні'))
    console.log(stringToArray(null))
    console.log(stringToArray(undefined))
    console.log(stringToArray(24))
    console.log(stringToArray({}))
}

{
//     #Rbr5kEQ
    const nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
    const strs = nums.map(value => '' + value)
    console.log(strs);
}

{
//     #5hqyKTfmc
    const sortNums = (array, direction) => {
        if (direction === 'ascending') return array.sort((a, b) => a - b)
        if (direction === 'descending') return array.sort((a, b) => b - a)
        return array
    }
    let nums = [11, 21, 3]
    console.log(sortNums(nums, 'ascending')); // [3,11,21]

    console.log(sortNums(nums, 'descending')); // [21,11,3]
}

{
//     #yo06d74c1C
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ]
    const filtered = coursesAndDurationArray
        .sort((a, b) => b.monthDuration - a.monthDuration)
        .filter(value => value.monthDuration > 5)
        .map((value, index) => ({
            ...value,
            id: index + 1
        }))

    console.log(filtered);
}
