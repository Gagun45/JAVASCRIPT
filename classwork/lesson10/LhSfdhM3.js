{
    const sessionList =  JSON.parse(localStorage.getItem('sessionList')) || []
    for (const session of sessionList) {
        const div = document.createElement('div')
        div.innerText=session

        document.body.appendChild(div)
    }
}