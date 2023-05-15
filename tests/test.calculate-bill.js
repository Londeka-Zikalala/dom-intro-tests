describe('calculateBill function test', function(){

    it('should split  and trim an input string', function(){
       var calculateBillStrings = calculateBills();

    assert.deepEqual(calculateBillStrings.billStringFunction('call, sms '),[ 'call','sms' ]);
    })

    it('should transform all text to lowercase',function(){
        var calculateBillStrings = calculateBills();
        var trimmedString = calculateBillStrings.billStringFunction('Call, SmS ');
        assert.deepEqual(calculateBillStrings.textTransform(trimmedString), ['call','sms'])
    })
 
})

describe('Calculating input strings',
function(){

    it('should add the input calls costing R2.75 each',function(){
        var calculateBillStrings = calculateBills();
        var calculateBillStrings = calculateBills();
        var transformedString = calculateBillStrings.textTransform(calculateBillStrings.billStringFunction('Call,Call, call, call'));
        assert.equal(calculateBillStrings.makeACall(transformedString), 11.00)
    })
    it('should add the input smses costing R0.75 each', function(){
        var calculateBillStrings = calculateBills();
        var calculateBillStrings = calculateBills();
        var transformedString = calculateBillStrings.textTransform(calculateBillStrings.billStringFunction('Sms,SMS, sms'));
        assert.equal(calculateBillStrings.makeAnSms(transformedString), 2.25)
    })
   
    it('should add the total of calls and smses costing 2.75 and 0.75 respectively', function(){
        var calculateBillStrings = calculateBills();
        var transformedString = calculateBillStrings.textTransform(calculateBillStrings.billStringFunction('Call,Sms,Call, call, call'));
        calculateBillStrings.makeACall(transformedString)
        calculateBillStrings.makeAnSms(transformedString)
        assert.equal(calculateBillStrings.getTotal(), 11.75)
    })

})

describe('Critical and warning level tests', function(){
    it('should return the class name of "danger" when the total cost reaches R30', function(){
        var calculateBillStrings = calculateBills();
        var transformedString = calculateBillStrings.textTransform(calculateBillStrings.billStringFunction('Call,Sms,Call, call, call, Call,Sms,Call, call, call, Call, Call, Call'));
        calculateBillStrings.makeACall(transformedString);
        calculateBillStrings.makeAnSms(transformedString);
        assert.equal(calculateBillStrings.getTotal(transformedString), 31.75);
        assert.equal(calculateBillStrings.classes(transformedString), 'danger');
    })

    it('should return the class name of "warning" when the total cost reaches R20', function(){
        var calculateBillStrings = calculateBills();
        var transformedString = calculateBillStrings.textTransform(calculateBillStrings.billStringFunction('Call,Sms,Call, call, call, Call, Call, Call, Sms'));
        calculateBillStrings.makeACall(transformedString);
        calculateBillStrings.makeAnSms(transformedString);
        assert.equal(calculateBillStrings.getTotal(transformedString), 20.75);
        assert.equal(calculateBillStrings.classes(transformedString), 'warning');
    })
})