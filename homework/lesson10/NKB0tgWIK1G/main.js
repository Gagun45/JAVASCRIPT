const items = []
for (let i=0;i<100;i++) {
    items.push(`Item ${i+1}`)
}

const itemsDiv = document.getElementById('items')

function appendTenDivs (startIndex) {
    for (let i=startIndex;i<startIndex+10;i++) {
        const itemBlock = document.createElement('div')
        itemBlock.innerText = items[i]
        itemsDiv.appendChild(itemBlock)
    }
}

let startIndex = 0;
appendTenDivs(startIndex) // initially show first 10 items

const nextBtn = document.getElementById('nextBtn')
nextBtn.onclick = () => {
    if (startIndex+10<=90) startIndex+=10
    else return // do nothing if startIndex cannot be increased
    itemsDiv.replaceChildren() // remove current items
    appendTenDivs(startIndex) // append next 10 items
}

const prevBtn = document.getElementById('prevBtn')
prevBtn.onclick = () => {
    if (startIndex-10>=0) startIndex-=10
    else return  // do nothing if startIndex cannot be decreased
    itemsDiv.replaceChildren() // remove current items
    appendTenDivs(startIndex) // append prev 10 items
}

