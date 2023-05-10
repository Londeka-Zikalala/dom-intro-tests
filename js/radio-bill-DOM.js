const callsTotalElem = document.querySelector('.callTotal');
const smsTotalElem = document.querySelector('.smsTotal');
const totalCostElem = document.querySelector('.total');
const radioBillAddBtn = document.querySelector('.radioBillAddBtn');

const radioBill = radioBillFunction();

function radioBillTotal(){
    const checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        const billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
        if (billItemType === "call"){
            radioBill.makeCall();
        }
        else if (billItemType === "sms"){
            radioBill.sendSms();
        }
    }
   
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = radioBill.getCallCostTot().toFixed(2);
    smsTotalElem.innerHTML = radioBill.getSmsCostTot().toFixed(2);
    totalCostElem.innerHTML = radioBill.roundOff();
    
    const totalCost = totalCostElem.innerHTML;
    if (totalCost >= radioBill.getCriticalLevel()){
        
        totalCostElem.classList.add("danger");
        totalCostElem.classList.remove("warning");
    }
    else if (totalCost >= radioBill.getWarningLevel()){
        totalCostElem.classList.add("warning");
        totalCostElem.classList.remove("danger");
    }
    else{
        totalCostElem.classList.remove("warning", "danger")
    }
}

radioBillAddBtn.addEventListener('click', radioBillTotal);
