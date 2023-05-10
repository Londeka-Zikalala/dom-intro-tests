function calculateBills(){
  var callCost = 2.75;
  var smsCost = 0.75;
  var theSms = 0;
  var theCall = 0
  var critical = 30;
  var warning = 20;
  var trimmedString = [];
  var calculateBillString = '';

  function billStringFunction(bill){
    calculateBillString = bill.split(',')
    for(var i = 0; i< calculateBillString.length; i++){
      trimmedString.push(calculateBillString[i].trim());
    }
    return trimmedString
  }

 function textTransform(trimmedString){
  var transformed = [];
  for(var i = 0; i<trimmedString.length;i++){
   transformed.push(trimmedString[i].toLowerCase())
 }
  return transformed
 }
 function addCalls(transformed){
  for(var i = 0; i<transformed.length;i++){
    if(transformed[i]=== 'call'){
      theCall += callCost
    }
  } return theCall
 }

 function addSmses(transformed){
  
  for(var i = 0;i <transformed.length; i++){
    if(transformed[i] === 'sms'){
      theSms += smsCost;
    }
  }return theSms
 }
 
 function getCallTotal(transformed){
return addCalls(transformed)
 }

 function getSmsTotal(transformed){
return addSmses(transformed)
 }
 function getTotal(transformed){
  return getCallTotal(transformed) + getSmsTotal(transformed)
 }
function roundOff(transformed){
  return getTotal(transformed).toFixed(2);
}
 function classCritical(transformed){
    if(roundOff(transformed) >= critical ){
      return 'critical'
    } 
 }

 function classWarning(transformed){

  if(roundOff(transformed) >= warning){
    return 'warning'
  }
 }
  return{
    billStringFunction,
    textTransform,
    addCalls,
    addSmses,
    getCallTotal,
    getSmsTotal,
    getTotal,
    roundOff,
    classCritical,
    classWarning


  
  }
}