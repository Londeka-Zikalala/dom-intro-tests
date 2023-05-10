describe('the radio bill function', function(){
    it('should get the input call string', function(){
        var radioBill = radioBillFunction();

        assert.equal(radioBill.getCallCost(), 2.75)
    })
    it('should get the input sms string', function(){
        var radioBill = radioBillFunction();

        assert.equal(radioBill.getSmsCost(), 0.75)
    })

})

describe(' calculating the input call and sms strings', function(){
    it('should round off the total to 2 decimal places', function(){
        var radioBill = radioBillFunction();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.sendSms();
            radioBill.sendSms();
            radioBill.sendSms();
            radioBill.sendSms();
            assert.equal(radioBill.roundOff(), 17.50)
        })
    it('should calculate the total calls costing 2.75 each', function(){
        var radioBill = radioBillFunction();
        radioBill.makeCall();
        radioBill.makeCall();
        radioBill.makeCall();
        radioBill.makeCall();
        assert.equal(radioBill.getCallCostTot(), 13.75)
    })

    it('should calculate the total sms costing 0.75 each', function(){
        var radioBill = radioBillFunction();
        radioBill.sendSms();
        radioBill.sendSms();
        radioBill.sendSms();
        radioBill.sendSms();
        assert.equal(radioBill.getSmsCostTot(), 3.75)
    })


     it('should calculate the total of calls and smses costing 2.75 and 0.75 respectively', function(){
        var radioBill = radioBillFunction();
        radioBill.makeCall();
        radioBill.makeCall();
        radioBill.makeCall();
        radioBill.makeCall();
        radioBill.sendSms();
        radioBill.sendSms();
        radioBill.sendSms();
        radioBill.sendSms();
        assert.equal(radioBill.roundOff(), 17.50)
    })

})
    

describe('Critical and warning level tests', function(){
    it('should return the class name of "warning" when the total reaches R30', function(){
        var radioBill = radioBillFunction();
        radioBill.makeCall();
        radioBill.makeCall();
        radioBill.makeCall();
        radioBill.makeCall();
        radioBill.sendSms();
        radioBill.sendSms();
        radioBill.sendSms();
        radioBill.sendSms();
        radioBill.makeCall();
        radioBill.sendSms();
        radioBill.makeCall();
        radioBill.sendSms();
        radioBill.makeCall();
        radioBill.sendSms();
        radioBill.makeCall();
        radioBill.sendSms();
        assert.equal(radioBill.roundOff(), 31.50  )
        assert.equal(radioBill.theClassName(), 'warning')
    })

    it('should return the class name of "critical" when the total reaches R50', function(){
        var radioBill = radioBillFunction();
        radioBill.makeCall();
        radioBill.makeCall();
        radioBill.makeCall();
        radioBill.makeCall();
        radioBill.sendSms();
        radioBill.sendSms();
        radioBill.sendSms();
        radioBill.sendSms();
        radioBill.makeCall();
        radioBill.sendSms();
        radioBill.makeCall();
        radioBill.sendSms();
        radioBill.makeCall();
        radioBill.sendSms();
        radioBill.makeCall();
        radioBill.sendSms();
        radioBill.makeCall();
        radioBill.sendSms();
        radioBill.makeCall();
        radioBill.sendSms();
        radioBill.makeCall();
        radioBill.sendSms();
        radioBill.makeCall();
        radioBill.sendSms();
        radioBill.makeCall();
        radioBill.sendSms();
        radioBill.sendSms()
        radioBill.sendSms()
        assert.equal(radioBill.roundOff(),50.50)
        assert.equal(radioBill.theClassName(), 'critical')
    })
})