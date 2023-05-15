describe('the input text bill function',
function(){
   it('should trim the input string', function(){
    var textBill = inputTextFunction();
    assert.equal(textBill.trimmedBill(' call'), 'call')
   }) 
   it('should transform the input text to lowercase',function(){
    var textBill = inputTextFunction();
    assert.equal(textBill.transformedStr(' calL'), 'call')
   })

})

describe('Calculating the values', function(){
    it('should add the calls at 2.75 each', function(){
        var textBill = inputTextFunction();
        var aCall = textBill.transformedStr(textBill.trimmedBill(' Call'))
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);

        assert.equal(textBill.getTheCallTotal(aCall),  13.75);
    })

    it('should add the sms at 0.75 each', function(){
        var textBill = inputTextFunction();
        var aSms = textBill.transformedStr(textBill.trimmedBill(' SMS'))
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);

        assert.equal(textBill.getTheSmsTotal(aSms), 3.75);
    })
    it('should get the total of the sms and calls at 2.75 and 0.75 each', function(){
        var textBill = inputTextFunction();
        var aSms = textBill.transformedStr(textBill.trimmedBill(' SMS'))
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        var aCall = textBill.transformedStr(textBill.trimmedBill(' Call'))
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);

        assert.equal(textBill.totalBill(), 14.00);

    })
    it('should get the rounded total', function(){
        var textBill = inputTextFunction();
        var aSms = textBill.transformedStr(textBill.trimmedBill(' SMS'))
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        var aCall = textBill.transformedStr(textBill.trimmedBill(' Call'))
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        assert.equal(textBill.roundedTotal(), 16.75);
    })
})

describe('Critical and warning level tests', function(){
    it('should return the class name of "warning" when the total cost reaches 30', function(){
        var textBill = inputTextFunction();
        var aSms = textBill.transformedStr(textBill.trimmedBill(' SMS'))
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        var aCall = textBill.transformedStr(textBill.trimmedBill(' Call'))
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);

        assert.equal(textBill.roundedTotal(), 33.25);
        assert.equal(textBill.classes(), 'warning')
    })

    it('should return the class name of "danger" when the total cost reaches 50', function(){
        var textBill = inputTextFunction();
        var aSms = textBill.transformedStr(textBill.trimmedBill(' SMS'))
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        textBill.sendSms(aSms);
        var aCall = textBill.transformedStr(textBill.trimmedBill(' Call'))
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);
        textBill.makeCall(aCall);

        assert.equal(textBill.roundedTotal(), 52.75);
        assert.equal(textBill.classes(), 'danger')
       
    })
})