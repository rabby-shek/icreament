let counting = document.getElementById("count_number")
console.log(counting)
let count = 0
function increment(){
    count = count + 1
    counting.innerText = count
    console.log(count)
}
function Decrement(){
    count = count - 1
    counting.innerText = count
    console.log(count)
}