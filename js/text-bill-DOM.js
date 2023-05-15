// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector('.billTypeText');
const callTotalElem = document.querySelector('.callTotalOne');
const smsTotalElem = document.querySelector('.smsTotalOne');
//get a reference to the add button
const textBillAddBtn = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
const totalCostElemR = document.querySelector('.totalOne')

const textbillFunction = inputTextFunction();
//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
// define global variables


// define the textBillTotal function
function textBillTotal() {
  // get the value entered in the billType textfield
  var billTypeEntered = textbillFunction.trimmedBill(billTypeText.value);
  var transformedText = textbillFunction.transformedStr(billTypeEntered);
  // update the correct total
  if (transformedText === "call") {
    textbillFunction.makeCall(transformedText);
  } else if (transformedText === "sms") {
    textbillFunction.sendSms(transformedText)
  }
  
  callTotalElem.innerHTML = textbillFunction.getTheCallTotal().toFixed(2);
  smsTotalElem.innerHTML = textbillFunction.getTheSmsTotal().toFixed(2);
  totalCostElemR.innerHTML = textbillFunction.totalBill().toFixed(2);
  
    totalCostElemR.classList.remove("warning");
    totalCostElemR.classList.remove("danger");
    totalCostElemR.classList.add(textbillFunction.classes())
 

}

textBillAddBtn.addEventListener('click', textBillTotal)

