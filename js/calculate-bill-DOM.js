//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed


//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

const calculateBill = calculateBills();

function calculateBtnClicked(){
  var billString = billStringElement.value;
  //split the string
  var billItems = calculateBill.billStringFunction(billString);
  // transform the items to lowercase
  var transformedString = calculateBill.textTransform(billItems);
  calculateBill.reset();
  
  //loop over all the bill items
  for (var i=0; i < transformedString.length; i++){
    calculateBill.makeACall(transformedString);
    calculateBill.makeAnSms(transformedString);
  }
  //round to two decimals
  billTotalElement.innerHTML = calculateBill.getTotal().toFixed(2);
  billTotalElement.classList.remove("warning");
  billTotalElement.classList.remove("danger");
  billTotalElement.classList.add(calculateBill.classes());

    
}


calculateBtn.addEventListener('click', calculateBtnClicked);
