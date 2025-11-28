
{
//     #8Nmt60ZT
    const div = document.createElement('div');
    div.classList.add('wrap', 'collapse', 'alpha', 'beta')
    div.innerText='qwe'
    document.body.appendChild(div)
    const clonedDiv = div.cloneNode(true);
    document.body.appendChild(clonedDiv)
}

{
//     #OPLI89c9G
    const strings = ['Main', 'Products', "About us", 'Contacts'];
    const ul = document.createElement('ul');
    for (const s of strings) {
        const li = document.createElement('li')
        li.innerText=s
        ul.appendChild(li)
    }
    document.body.appendChild(ul)
}

{
    // #jeBqHV525U5
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    for (const course of coursesAndDurationArray) {
        const div = document.createElement('div')
        div.innerText=`${course.title} - ${course.monthDuration}`

        document.body.appendChild(div)

    }
}

{
    //#Kx1xgoKy8
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    for (const course of coursesAndDurationArray) {
        const div = document.createElement('div')
        div.classList.add('item')

        const h1 = document.createElement('h1')
        h1.innerText=course.title
        h1.classList.add('heading')

        const p = document.createElement('p')
        p.innerText=course.monthDuration
        p.classList.add('description')

        div.append(h1, p)

        document.body.appendChild(div)

    }
}