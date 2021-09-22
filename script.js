//[x] grab the ids
// [] event Listener
// [] submit func ( calculate amount) (showResultToDOm)


//btn part
const fiveBtn = document.getElementById("five").value;
const teenBtn = document.getElementById("teen").value;
const fifteenBtn = document.getElementById("fifteen").value;
const tFiveBtn = document.getElementById("tFive").value;
const fiftyBtn = document.getElementById("fifty").value;
console.log(fiftyBtn)
// btn finish
const inputTip = document.getElementById("tip-input");

const tipAmount = document.getElementById("peopleNum");
const totalEl = document.getElementById("total");
const submitEl = document.getElementById("submit-btn");
const form = document.getElementById("form");



const submitHandler = (e) => {
    e.preventDefault();
    const billEL = document.getElementById("bill").value; // onsubmit func
    const peopleNum = document.getElementById("peopleNum").value;
    
    let billPerPerson = (billEL / peopleNum);
    let tipPerPeron= ((fiveBtn / 100) * billPerPerson );
    console.log(tipPerPeron, billPerPerson)
    tipAmount.innerHTML=`${tipPerPeron}`;

    

}












//Event Listener
form.addEventListener("submit", submitHandler);





