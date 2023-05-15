// get a reference to the sms or call radio buttons
const callTotalSettingsElem = document.querySelector('.callTotalSettings');
const smsTotalSettingsElem = document.querySelector('.smsTotalSettings');
const totalSettingsElem = document.querySelector('.totalSettings');
// get refences to all the settings fields
const callCostSettingElem = document.querySelector('.callCostSetting');
const smsCostSettingElem = document.querySelector('.smsCostSetting');
const warningLevelSettingElem =document.querySelector('.warningLevelSetting');
const criticalLevelSettingElem = document.querySelector('.criticalLevelSetting');
//get a reference to the add button
const billWithSettingsAddBtn = document.querySelector('.billWithSettingsAddBtn');
//get a reference to the 'Update settings' button
const updateSettingsBtn = document.querySelector('.updateSettings');

    const billWithSettingsDOM = billWithSettings();
  


//add an event listener for when the 'Update settings' button is pressed
//updateSettingsBtn.addEventListener(click, function())
//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
function updateBillWithSettings(){
    billWithSettingsDOM.setCallCost(Number(callCostSettingElem.value));
     billWithSettingsDOM.setSmsCost(Number(smsCostSettingElem.value));
     billWithSettingsDOM.setWarningLevel(warningLevelSettingElem.value);
    billWithSettingsDOM.setCriticalLevel(criticalLevelSettingElem.value);

   
    totalSettingsElem.classList.remove("warning");
    totalSettingsElem.classList.remove("danger");
    totalSettingsElem.classList.add(billWithSettingsDOM.totalClassName());
  
} 
function billWithSettingsTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
   if (checkedRadioBtn){

        var billItemTypeWithSettings = checkedRadioBtn.value
        // billItemTypeWithSettings will be 'call' or 'sms'
        console.log(billItemTypeWithSettings)
        if (billItemTypeWithSettings === "call"){
            billWithSettingsDOM.makeACall()
        }
        else if (billItemTypeWithSettings === "sms"){
            billWithSettingsDOM.sendAnSms()
        }
        
    }    
   //update totals

   callTotalSettingsElem.innerHTML = billWithSettingsDOM.getCallCostTotal();
   smsTotalSettingsElem.innerHTML = billWithSettingsDOM.getSmsCostTotal().toFixed(2);
   totalSettingsElem.innerHTML = billWithSettingsDOM.getTotalCost().toFixed(2);
   warningLevelSettingElem.innerHTML = billWithSettingsDOM.getWarningLevel();
   criticalLevelSettingElem.innerHTML = billWithSettingsDOM.getCriticalLevel();

   totalSettingsElem.classList.remove("warning");
   totalSettingsElem.classList.remove("danger");
   totalSettingsElem.classList.add(billWithSettingsDOM.totalClassName());




}

billWithSettingsAddBtn.addEventListener('click', billWithSettingsTotal)
updateSettingsBtn.addEventListener('click', updateBillWithSettings);