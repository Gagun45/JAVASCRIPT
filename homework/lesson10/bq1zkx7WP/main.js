function updateLocalStorage(fullPrice) {
    const lastReload = {fullPrice, datestamp: new Date()}
    localStorage.setItem('lastReload', JSON.stringify(lastReload))
}

window.onload = function () {
    const lastReloadJSON = localStorage.getItem('lastReload')
    const currentDate = new Date()
    const div = document.getElementById('price')
    // if localStorage doesnt contain lastReload object yet -> set initial price + sessionTime
    if (!lastReloadJSON) {
        const fullPrice = div.innerText
        updateLocalStorage(fullPrice) //
        return
    }
    const lastReload = JSON.parse(lastReloadJSON)
    const {fullPrice, datestamp} = lastReload
    const lastReloadDate = new Date(datestamp)
    if ((currentDate - lastReloadDate) > 10000) {
        const price = +fullPrice.slice(0, -3) // "Xгрн"===> price = X
        const updatedPrice = `${price + 10}грн`
        updateLocalStorage(updatedPrice) // updated price + new sessionTime
        div.innerText=updatedPrice
    } else {
        updateLocalStorage(fullPrice) // old price + new sessionTime
        div.innerText=fullPrice
    }
}