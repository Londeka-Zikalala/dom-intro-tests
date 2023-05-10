describe('the input text bill function',
function(){
   it('should trim the input string', function(){
    var textBill = inputText();
    assert.equal(textBill.trimmedBill(' call'), 'call')
   }) 
   it('should transform the input text to lowercase',function(){
    var textBill = inputText();
    assert.equal(textBill.transformedStr(' calL'), 'call')
   })

   it('should get the input text type', function(){
    var textBill = inputText();
    var transformed1 = textBill.transformedStr(textBill.trimmedBill(' Call'))
    var transformed2 = textBill.transformedStr(textBill.trimmedBill('Sms'))
    assert.equal(textBill.callBill(transformed1), 2.75)
    assert.equal(textBill.callBill(transformed2), 0.75)

   })

})

describe('Calculating the values', function(){
    it('should add the calls at 2.75 each', function(){
        var textBill = inputText();
        var aCall = textBill.transformedStr(textBill.trimmedBill(' Call'))
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);

        assert.equal(textBill.totalCalls(aCall),  13.75);
    })

    it('should add the sms at 0.75 each', function(){
        var textBill = inputText();
        var aSms = textBill.transformedStr(textBill.trimmedBill(' SMS'))
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);

        assert.equal(textBill.totalSmes(aSms), 3.75);
    })
    it('should get the total of the sms and calls at 2.75 and 0.75 each', function(){
        var textBill = inputText();
        var aSms = textBill.transformedStr(textBill.trimmedBill(' SMS'))
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        var aCall = textBill.transformedStr(textBill.trimmedBill(' Call'))
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);

        assert.equal(textBill.totalBill(), 14.00);

    })
    it('should get the rounded total', function(){
        var textBill = inputText();
        var aSms = textBill.transformedStr(textBill.trimmedBill(' SMS'))
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        var aCall = textBill.transformedStr(textBill.trimmedBill(' Call'))
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        assert.equal(textBill.roundedTotal(), 16.75);
    })
})

describe('Critical and warning level tests', function(){
    it('should return the class name of "warning" when the total cost reaches 30', function(){
        var textBill = inputText();
        var aSms = textBill.transformedStr(textBill.trimmedBill(' SMS'))
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        var aCall = textBill.transformedStr(textBill.trimmedBill(' Call'))
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);

        assert.equal(textBill.roundedTotal(), 36.00);
        assert.equal(textBill.warningLevel(), 'warning')
    })

    it('should return the class name of "critical" when the total cost reaches 50', function(){
        var textBill = inputText();
        var aSms = textBill.transformedStr(textBill.trimmedBill(' SMS'))
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        textBill.addTheSmses(aSms);
        var aCall = textBill.transformedStr(textBill.trimmedBill(' Call'))
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);
        textBill.addTheCalls(aCall);

        assert.equal(textBill.roundedTotal(), 52.75);
        assert.equal(textBill.criticalLevel(), 'critical')
    })
})