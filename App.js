let inputEle = document.getElementById("timeCount")
let currentTime = document.getElementById("current-time")

// const myFunct = (e) => {
//     let countDown = inputEle.value
//     console.log(e.key)

//     if (typeof (countDown) == "Number") {
//         let counter = setInterval(() => {
//             currentTime.innerText = countDown
//             countDown--
//             if(countDown == 0){
//                 clearInterval(counter)
//             }
//         }, 1000);
//     }
// }
let counter;
function containsOnlyNumbers(str) {
    return /^(\d)|(\d.)+$/.test(str);
  }
inputEle.addEventListener("keydown", (e) => {
    let inputEle = document.getElementById("timeCount")
    let countDown = (inputEle.value)
    if(e.key == "Enter"){
        clearInterval(counter)
    if (containsOnlyNumbers(countDown) == true && parseInt(countDown) > 0) {
        countDown = parseInt(countDown)
        currentTime.innerText = countDown
         counter = setInterval(() => {
            countDown--
            currentTime.innerText = countDown
            if (countDown == 0) {
                clearInterval(counter)
            }
        }, 1000);
    }else{
        currentTime.innerText = "0"
    }
}
})