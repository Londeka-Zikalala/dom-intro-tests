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
   
    it('should calculate the total calls costing 2.75 each', function(){
        var radioBill = radioBillFunction();
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        assert.equal(radioBill.getCallCostTot(), 13.75)
    })

    it('should calculate the total sms costing 0.75 each', function(){
        var radioBill = radioBillFunction();
        radioBill.sendSms('sms');
        radioBill.sendSms('sms');
        radioBill.sendSms('sms');
        radioBill.sendSms('sms');
        radioBill.sendSms('sms');
        assert.equal(radioBill.getSmsCostTot(), 3.75)
    })


     it('should calculate the total of calls and smses costing 2.75 and 0.75 respectively', function(){
        var radioBill = radioBillFunction();
        radioBill.sendSms('sms');
        radioBill.sendSms('sms');
        radioBill.sendSms('sms');
        radioBill.sendSms('sms'); 
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        assert.equal(radioBill.getTheTotal(), 16.75)
    })

})
    

describe('Critical and warning level tests', function(){
    it('should return the class name of "warning" when the total reaches R30', function(){
        var radioBill = radioBillFunction();
        radioBill.sendSms('sms');
        radioBill.sendSms('sms');
        radioBill.sendSms('sms');
        radioBill.sendSms('sms'); 
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.sendSms('sms');
        radioBill.sendSms('sms'); 
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.sendSms('sms');
        radioBill.sendSms('sms'); 
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        assert.equal(radioBill.getTheTotal(), 30.75)
        assert.equal(radioBill.theClassName(), 'warning')
    })

    it('should return the class name of "danger" when the total reaches R50', function(){
        var radioBill = radioBillFunction();
        radioBill.sendSms('sms');
        radioBill.sendSms('sms');
        radioBill.sendSms('sms');
        radioBill.sendSms('sms'); 
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.sendSms('sms');
        radioBill.sendSms('sms'); 
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.sendSms('sms');
        radioBill.sendSms('sms'); 
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.sendSms('sms');
        radioBill.sendSms('sms'); 
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.sendSms('sms');
        radioBill.sendSms('sms'); 
        radioBill.makeCall('call');
        radioBill.makeCall('call');
        radioBill.sendSms('sms');
        radioBill.sendSms('sms'); 
        assert.equal(radioBill.getTheTotal(), 51.75)
        assert.equal(radioBill.theClassName(), 'danger')
    })
})