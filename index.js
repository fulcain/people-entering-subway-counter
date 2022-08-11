let count = 0
let countEl = document.getElementById('counter-el')
let saveEl = document.getElementById('save-el')

//increment
function increment() {
    count += 1
    countEl.textContent = count
}

//decrement
function decrement() {
    if (count > 0) {
        count -= 1
    }
    countEl.textContent = count
}



//save
function save() {

    if (count > 0) {

        countStr = count + " - "
        saveEl.textContent += countStr
        
        count = 0
        countEl.textContent = 0
    }

}
