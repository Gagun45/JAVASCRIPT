//#gsKLAsNWM
const array = ['a', 'b', 'cd', 'qwe', 'xxxxxxxxxxx', 12, 24, 56, 0]

// forEach
console.log('-------foreach----------')
Array.prototype.customForeach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

function foreachCallback(value, index, array) {
    console.log(value, index, array.length);
}

console.log(array);
array.customForeach(foreachCallback)
console.log('-------foreach----------')

// filter
console.log('-------filter----------')
Array.prototype.customFilter = function (callback) {
    const filtered = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) filtered.push(this[i])
    }
    return filtered
}

function filterCallback(value, index, array) {
    return value.length>2
}

console.log(array);
console.log(array.customFilter(filterCallback));
console.log('-------filter----------')