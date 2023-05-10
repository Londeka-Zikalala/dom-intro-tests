function inputText(){
  var callCost = 2.75;
  var smsCost = 0.75;
  var theSms = 0;
  var theCall = 0
  var critical = 50;
  var warning = 30;

  function trimmedBill(bill){
    var trimmedStr = bill.trim();
    return trimmedStr;
  }

  function transformedStr(bill){
    return trimmedBill(bill).toLowerCase();
  }

  function callBill(transformedStr){
    if(transformedStr === 'call'){
      return callCost
    }else if(transformedStr=== 'sms'){
      return smsCost
    }
  }
  
 function addTheCalls(transformedStr){
  if(transformedStr === 'call'){
   theCall += callCost
  }
  return theCall
 }
function addTheSmses(transformedStr){
  if(transformedStr === 'sms'){
    theSms += smsCost
    
  }
  return theSms
}

function totalCalls(transformedStr){
  return addTheCalls(transformedStr)
}

function totalSmes(transformedStr){
  return addTheSmses(transformedStr)
}
 function totalBill(transformedStr){
  return addTheCalls(transformedStr) + addTheSmses(transformedStr)
 }
function roundedTotal(transformedStr){
  return totalBill(transformedStr).toFixed(2)
}
 function warningLevel(transformedStr){
  if(roundedTotal(transformedStr) >= warning){
    return 'warning'
  }
 }
function criticalLevel(transformedStr){
  if(roundedTotal(transformedStr) >= critical){
    return 'critical'
  }
}
return {
  trimmedBill,
  transformedStr,
  callBill,
  addTheCalls,
  addTheSmses,
  totalCalls,
  totalSmes,
  totalBill,
  roundedTotal,
  warningLevel,
  criticalLevel
}
}