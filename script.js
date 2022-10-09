counter = document.getElementById("count")

function increment() {
    currentValue = document.getElementById("count").value
    counter.value ++
}

function decrement() {
    currentValue = document.getElementById("count").value
    counter.value --
}

document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowUp") {
        increment()
    }
    if (event.key == "ArrowDown") {
        decrement()
    }
})