// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector('.billTypeText');
const callTotalElem = document.querySelector('.callTotalOne');
const smsTotalElem = document.querySelector('.smsTotalOne');
//get a reference to the add button
const textBillAddBtn = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
const totalCostElem = document.querySelector('.totalOne')
//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
// define global variables
var callsTotalOne = 0;
var smsTotalOne = 0;

// define the textBillTotal function
function textBillTotal() {
  // get the value entered in the billType textfield
  var billTypeEntered = billTypeText.value.trim().toLowerCase();
  // update the correct total
  if (billTypeEntered === "call") {
    callsTotalOne += 2.75;
  } else if (billTypeEntered === "sms") {
    smsTotalOne += 0.75;
  }
  
  callTotalElem.innerHTML = callsTotalOne.toFixed(2);
  smsTotalElem.innerHTML = smsTotalOne.toFixed(2);
  var totalCostOne = callsTotalOne + smsTotalOne;
  totalCostElem.innerHTML = totalCostOne.toFixed(2);
  
  if (totalCostOne >= 50){
    // adding the danger class will make the text red
    totalCostElem.classList.add("danger");
    totalCostElem.classList.remove("warning");
}
else if (totalCostOne >= 30){
    totalCostElem.classList.add("warning");
    totalCostElem.classList.remove("danger");
} else{
    totalCostElem.classList.remove("warning","danger");
  }

}
textBillAddBtn.addEventListener('click', textBillTotal)

