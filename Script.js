//Selecting button, input1 & input2, span 
const btnEl=document.getElementById("calculate")
const billinput=document.getElementById("bill")
const tipinput=document.getElementById("tip")
const totalspan=document.getElementById("total")

function calculateValue(){
    const billValue=billinput.value
    const tipValue=tipinput.value
    const totalValue=billValue * (1 + tipValue / 100)
    totalspan.innerText=totalValue.toFixed(2)

}
btnEl.addEventListener("click",calculateValue)
