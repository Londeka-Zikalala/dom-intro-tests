// get a reference to the sms or call total elements
const callsTotalTwoElem = document.querySelector('.callTotalTwo');
const smsTotalTwoElem = document.querySelector('.smsTotalTwo');
const totalCostTwoElem = document.querySelector('.totalTwo');

// get a reference to the add button
const radioBillAddBtn = document.querySelector('.radioBillAddBtn');

//create a variable that will keep track of the total bill
const textTotalAddBtnElem = document.querySelector('.textTotalAddBtn')
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var callsTotalTwo = 0;
var smsTotalTwo = 0;

function radioBillTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
        if (billItemType === "call"){
            callsTotalTwo+= 2.75
        }
        else if (billItemType === "sms"){
            smsTotalTwo += 0.75;
        }
    }
   
    //update the totals that is displayed on the screen.
    callsTotalTwoElem.innerHTML = callsTotalTwo.toFixed(2);
    smsTotalTwoElem.innerHTML = smsTotalTwo.toFixed(2);
    var totalCostTwo = callsTotalTwo + smsTotalTwo;
    totalCostTwoElem.innerHTML = totalCostTwo.toFixed(2);
    
    if (totalCostTwo >= 50){
        // adding the danger class will make the text red
        totalCostTwoElem.classList.add("danger");
        totalCostTwoElem.classList.remove("warning");
    }
    else if (totalCostTwo >= 30){
        totalCostTwoElem.classList.add("warning");
        totalCostTwoElem.classList.remove("danger");
    }
    else{
        totalCostTwoElem.classList.remove("warning", "danger")
    }
}
radioBillAddBtn.addEventListener('click', radioBillTotal)
