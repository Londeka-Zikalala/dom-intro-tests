function radioBillFunction(){
var callCost = 2.75;
var smsCost = 0.75;
var someSms = 0;
var someCall = 0;
var criticalLevl = 50;
var warningLvl = 30;


function getCallCost(){
    someCall = callCost;
    return someCall
}
function getSmsCost(){
    someSms = smsCost;
    return someSms
}
function sendSms(){
   
    someSms += smsCost;
    return someSms;
  }
  function makeCall(){
    someCall += callCost;
    return someCall;
  }

function getCallCostTot(){
    return  makeCall()
}
function getSmsCostTot(){
    return sendSms()
}
function getTheTotal(){
    return getCallCostTot() + getSmsCostTot();
}
function roundOff(){
    return getTheTotal().toFixed(2);
}
function theClassName(){
    if(getTheTotal() >= criticalLevl ){
        return 'critical'
    } else if(getTheTotal() >= warningLvl){
        return 'warning'
    }
}

return{
    getCallCost,
    getSmsCost,
    getCallCostTot,
    getSmsCostTot,
    getTheTotal,
    sendSms,
    makeCall,
    theClassName,
    roundOff
}
}