//[x] grab the ids
// [x] event Listener
// [x] submit func ( calculate amount) (showResultToDOm)
// [] do not let the buttons be submit 
// [] function to insert the value of the button

const submitEl = document.getElementById("submit-btn");
const form = document.getElementById("form");



const submitHandler = (e) => {
    e.preventDefault();
    const billEL = document.getElementById("bill").value; 
    const peopleNum = document.getElementById("peopleNum").value;
    const tipAmount = document.getElementById("tip-amount");
    const totalEl = document.getElementById("total");
    const inputTip = document.getElementById("tip-input").value;
    const tipButtons = document.querySelectorAll(".tip-btn");
    console.log(tipButtons)

    // To calculate the bill per person
    let billPerPerson = (billEL / peopleNum).toFixed(2);
    
    // To calculate the tip for per person
    let tipPerPeron= ((inputTip / 100) * billPerPerson);

    tipAmount.innerHTML=`<span>$</span>${tipPerPeron}`;
    totalEl.innerHTML=`<span>$</span>${billPerPerson}`;

    Array.from(tipButtons).forEach((btn)=> {
        btn.addEventListener("click", (e)=> {
            const value = e.target.value;
            
        })
    })

}

//Event Listener
form.addEventListener("submit", submitHandler);





