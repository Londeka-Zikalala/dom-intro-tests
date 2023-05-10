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
  function getCallCost(){
    return theCallCost;
  }
function setSmsCost(smsCost){
  theSmsCost = smsCost;
  return theSmsCost;
  
}
function getSmsCost(){
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
function getWarningLevel(){
return warningLevel;
}
function getCriticalLevel(){
  return criticalLevel
}
function getCallCostTotal(){
  return totalCallCost.toFixed(2);
}

function sendAnSms(){
  if(!hasReachedCriticalLevel()){
  totalSmsCost += theSmsCost;
}
}

function getSmsCostTotal(){
  return totalSmsCost.toFixed(2);
}
function getTotalCost(){
  totalCost = totalSmsCost + totalCallCost;
  return totalCost.toFixed(2);
}

function hasReachedCriticalLevel() {
  return getTotalCost() >= getCriticalLevel()
  }
function makeACall(){
  if(!hasReachedCriticalLevel()){
totalCallCost += theCallCost;
}
}

function totalClassName(){
  if(hasReachedCriticalLevel())
  {
    return 'critical'
  }
   if(getTotalCost() >= getWarningLevel()){
    return 'warning'
  }
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
    getSmsCostTotal,
    getTotalCost,
    totalClassName,
    getWarningLevel,
    getCriticalLevel,
   hasReachedCriticalLevel
  }
}