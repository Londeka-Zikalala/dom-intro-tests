describe('The bill with settings factory function', function(){
it('should set the call cost', function(){
    let callSettingsBill = billWithSettings();
       
    assert.equal(callSettingsBill.setCallCost(1.85), 1.85);
    assert.equal(callSettingsBill.setCallCost(2.00),2.00);
})
it('should set the sms cost', function(){
    let smsSettingsBill = billWithSettings();
    assert.equal(smsSettingsBill.setSmsCost(0.85),0.85);
    assert.equal(smsSettingsBill.setSmsCost(1.70),1.70);
})

it('should get the sms cost and the call cost', function(){
    let smsAndCallSettingsBill= billWithSettings();

    assert.equal(smsAndCallSettingsBill.getCallCost(2), 2);
    assert.equal(smsAndCallSettingsBill.getSmsCost(0.85),0.85);
})
it('should set the warning and critical level values', function(){
let criticalAndWarningLevelsSettings = billWithSettings();
assert.equal(criticalAndWarningLevelsSettings.setWarningLevel(15), 15)
assert.equal(criticalAndWarningLevelsSettings.setCriticalLevel(25), 25)
})


})

describe('use the Values', function(){
    it('should add all the call costs', function(){
        let callTotalSettingsBill = billWithSettings();
    
        callTotalSettingsBill.setCallCost(2.50);
        callTotalSettingsBill.makeACall()
        callTotalSettingsBill.makeACall()
        callTotalSettingsBill.makeACall();
    
        assert.equal(callTotalSettingsBill.getCallCostTotal(), 7.5)
    
    })

    it('should add all the sms costs', function(){
        let smsTotalSettingsBill = billWithSettings();
        smsTotalSettingsBill.setSmsCost(0.85);
        smsTotalSettingsBill.sendAnSms();
        smsTotalSettingsBill.sendAnSms();
        smsTotalSettingsBill.sendAnSms();

        assert.equal(smsTotalSettingsBill.getSmsCostTotal(), 2.55)
    })
})