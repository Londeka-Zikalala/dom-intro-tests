function radioBillFunction() {

    var smsTotal = 0;
    var callTotal = 0;
    var criticalLevl = 50;
    var warningLvl = 30;


    function getCallCost() {
        return 2.75
    }
    function getSmsCost() {
      
        return 0.75
    }

    function sendSms(bill) {
if(bill === 'sms'){
    smsTotal += 0.75
}   
    }

    function makeCall(bill) {
        if (bill === 'call') {
            callTotal += 2.75
        }
    }

    function getCallCostTot() {
        return callTotal
    }
    function getSmsCostTot() {
        return smsTotal
    }
    function getTheTotal() {
        return callTotal + smsTotal
    }
   /* function roundOff() {
        return getTheTotal().toFixed(2);
    }*/
    function theClassName() {
        if (getTheTotal() >= criticalLevl) {
            return 'danger'
        } else if (getTheTotal() >= warningLvl) {
            return 'warning'
        }
    }

    return {
        getCallCost,
        getSmsCost,
        getCallCostTot,
        getSmsCostTot,
        getTheTotal,
        sendSms,
        makeCall,
        theClassName,
        
    }
}