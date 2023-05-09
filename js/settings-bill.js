function billWithSettings(){
var theCallCost = 0;
var theSmsCost = 0 ;
var warningLevel=0;
var criticalLevel = 0;
var totalSmsCost = 0;
var totalCallCost = 0;
var totalCost = 0;

  function setCallCost(callCost){
    theCallCost = callCost; 
    return theCallCost
  }
  function getCallCost(callCost){
    var theCallCost= callCost;
    return theCallCost;
  }
function setSmsCost(smsCost){
  theSmsCost = smsCost;
  return theSmsCost;
  
}
function getSmsCost(smsCost){
   theSmsCost= smsCost;
  return theSmsCost;
}
function setWarningLevel(warning){
  warningLevel = warning;
  return warningLevel;
}
function setCriticalLevel(critical){
  criticalLevel = critical;
  return criticalLevel;
}

function makeACall(){
totalCallCost += theCallCost;
}
function getCallCostTotal(){
  return totalCallCost;
}

function sendAnSms(){
  totalSmsCost += theSmsCost;
}

function getSmsCostTotal(){
  return totalSmsCost;
}
  return{
    setCallCost,
    setSmsCost,
    getCallCost,
    getSmsCost,
    setWarningLevel,
    setCriticalLevel,
    getCallCostTotal,
    makeACall,
    sendAnSms,
    getSmsCostTotal
   
  }
}