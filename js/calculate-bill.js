function calculateBills(){
  var theSms = 0;
  var theCall = 0
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

 function makeACall(transformed){
  for(var i = 0; i<transformed.length;i++){
    if(transformed[i]=== 'call'){
      theCall += 2.75
    }
  } return theCall
 }

 function makeAnSms(transformed){
  for(var i = 0;i <transformed.length; i++){
    if(transformed[i] === 'sms'){
      theSms += 0.75;
    }
  } return theSms
 }
 
 function getTotal() {
  var total = 0;
  if(theCall > 0 && theSms > 0) {
    total = theCall + theSms
  }
 else if(theSms <= 0) {
    total += theCall;
  } else if( theCall <= 0){
    total += theSms
  }
  return total;
}


 function classes(){
    if(getTotal() >= 30 ){
      return 'danger'
    }  else if(getTotal() >= 20){
      return 'warning'
    }
 }

 function reset(){
  theCall = 0;
  theSms = 0;
 }


  return{
    billStringFunction,
    textTransform,
    makeACall,
    makeAnSms,
    getTotal,
    classes,
    reset


  
  }
}