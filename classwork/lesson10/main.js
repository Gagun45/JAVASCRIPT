// {
//     // #sH8c4er
//     const button = document.getElementsByTagName('button')[0]
//     const text = document.getElementById('text')
//     button.onclick = function () {
//         text.remove()
//     }
// }

// {
// // #ymAmN2xJ
//     const form = document.forms.f1;
//     form.onsubmit = function (e) {
//         e.preventDefault()
//         const res = {}
//         const name = form.name.value
//         const surname = form.surname.value
//         const age = form.age.value
//         const div = document.createElement('div')
//         div.innerText=`${name} - ${surname} - ${age}`
//         document.body.appendChild(div)
//     }
//
// }

// {
// //     #2VaLt4vDczH
//     const numberDiv = document.getElementById('number')
//     let currentNumber = +localStorage.getItem('number')
//     currentNumber+=1
//     localStorage.setItem('number', currentNumber)
//     numberDiv.innerText=currentNumber
// }

// {
// //     #LhSfdhM3
//     const sessionList = JSON.parse(localStorage.getItem('sessionList')) || []
//     sessionList.push(new Date())
//     localStorage.setItem('sessionList', JSON.stringify(sessionList))
// }

// {
// //     #Jg0gPO00
//     const kgsInput = document.getElementById('kgs')
//     const lbsInput = document.getElementById('lbs')
//     kgsInput.oninput = () => {
//
//         lbsInput.innerText = (this.value*2.2).toFixed(2)+ ' lbs'
//
//     }
// }

// {
// //     #RbQGnH5DuC
//     function addToLocalStorage(arrayName,objToAdd) {
//         const arrayFromLS = JSON.parse(localStorage.getItem(arrayName))
//         if (arrayFromLS) arrayFromLS.push(objToAdd)
//         localStorage.setItem(arrayName, JSON.stringify(arrayFromLS))
//     }
// }

// {
// //     #kUSgFqWY
//     const form = document.forms['tableGen']
//     form.onsubmit = (e) => {
//         e.preventDefault()
//         const rows = form.rows.value
//         const cols = form.cols.value
//         const text = form.text.value
//         const newTable = document.createElement('table')
//         for (let r = 0; r<rows;r++){
//             const tr = document.createElement('tr')
//             for (let c = 0; c<cols;c++) {
//                 const td = document.createElement('td')
//                 td.innerText=text
//                 tr.appendChild(td)
//             }
//             newTable.appendChild(tr)
//         }
//         document.body.appendChild(newTable)
//     }
// }