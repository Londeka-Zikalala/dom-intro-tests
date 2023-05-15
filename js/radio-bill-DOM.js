let callsTotalElemR = document.querySelector('.callTotalTwo');
let smsTotalElemR = document.querySelector('.smsTotalTwo');
let totalCostElement = document.querySelector('.totalTwo');
let radioBillAddBtnR = document.querySelector('.radioBillAddBtn');

let radioBill = radioBillFunction();

function radioBillTotal(){
    const checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        const billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
        if (billItemType === "call"){
            radioBill.makeCall(billItemType);
        }
        else if (billItemType === "sms"){
            radioBill.sendSms(billItemType);
        }
    }
   
    //update the totals that is displayed on the screen.
    callsTotalElemR.innerHTML = radioBill.getCallCostTot().toFixed(2);
    smsTotalElemR.innerHTML = radioBill.getSmsCostTot().toFixed(2);
    totalCostElement.innerHTML = radioBill.getTheTotal().toFixed(2);
    
  //  const totalCost = totalCostElement.innerHTML;

    totalCostElement.classList.remove("warning");
    totalCostElement.classList.remove("danger");
    totalCostElement.classList.add(radioBill.theClassName())

    /*if (totalCost >= radioBill.getCriticalLevel()){
        
        totalCostElement.classList.add("danger");
        totalCostElement.classList.remove("warning");
    }
    else if (totalCost >= radioBill.getWarningLevel()){
        totalCostElement.classList.add("warning");
        totalCostElement.classList.remove("danger");
    }
    else{
        totalCostElement.classList.remove("warning", "danger")
    }*/
}

radioBillAddBtnR.addEventListener('click', radioBillTotal);
