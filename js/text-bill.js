function inputTextFunction() {
  var theSms = 0;
  var theCall = 0

  function trimmedBill(bill) {
    var trimmedStr = bill.trim();
    return trimmedStr;
  }

  function transformedStr(trimmedStr) {
    return trimmedBill(trimmedStr).toLowerCase();
  }

  function makeCall(trimmedStr) {
    if(trimmedStr === 'call') {
      theCall += 2.75
    }
  }
  function sendSms(trimmedStr){
    if(trimmedStr === 'sms'){
      theSms += 0.75
    }
  }

  function getTheCallTotal() {
    return theCall
  }
  function getTheSmsTotal() {
    return theSms
  }

  
  function totalBill() {
    return getTheCallTotal() + getTheSmsTotal()
  }
  function roundedTotal(transformedStr) {
    return totalBill(transformedStr).toFixed(2)
  }
  function classes() {
    if(totalBill() >= 50){
      return 'danger'
    } else if(totalBill() >= 30){
      return 'warning'
    }
  }

  return {
    trimmedBill,
    transformedStr,
    makeCall,
    sendSms,
    getTheCallTotal,
    getTheSmsTotal,
    totalBill,
    roundedTotal,
    classes
  }
}