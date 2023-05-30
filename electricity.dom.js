// DOM element(s) references
//const btn topupNow mt1 = document.querySelector(".btn topupNow mt1")
//const button = document.querySelector('.btn.topupNow.mt1');
const topupButton = document.querySelector('.btn.topupNow.mt1');
const useButton = document.querySelector('.btn.useNow.mt1');
//const button = document.querySelector('.btn useNow mt1')
 //const unitsAvailable = document.querySelector(".unitsAvailable")

// Factory Function instance 
const electricity =  Electricity();

//declaring variables 
let unitsAvailable = 0;
let totalUnits = 0;
let totalAmount = 0;
let advanceUsed = false;
let advanceAmount = 30;
let advanceUnits = 21;

//function to handle top-up
function topUpElectricity(amount) {
    var amount = document.querySelector("input[name='buyElectricity']:checked");

    if (amount === 10) {
        unitsAvailable+= 7;
    } else if (amount === 20) {
        unitsAvailable += 14;
    } else if (amount === 50) {
        unitsAvailable += 35;
    }
  
    totalUnits += unitsAvailable;
    totalAmount += amount;
    updateDisplay();
  }
  topupButton .addEventListener("click", topUpElectricity)

  //function that will reflect the current values of units available
  function updateDisplay() {
    document.getElementById('unitsAvailable').innerHTML= unitsAvailable;
    document.getElementById('totalUnits').innerHTML = totalUnits;
    document.getElementById('totalAmount').innerHTML = totalAmount;
  
    if (advanceUsed) {
      document.getElementById('advanceTaken').innerHTML = '✔';
    } else {
      document.getElementById('advanceTaken').innerHTML = '';
    }
  }

  // this function will handle the usage of appliances, checking if there are enough units 
  function useAppliance(units, appliance) {
    var appliance = document.querySelector("input[name='useElectricity']:checked");
    if (unitsAvailable >= units) {
        unitsAvailable -= units;
      updateDisplay();
      alert(`Appliance used successfully.`);
    } else {
      alert(`Not enough units available to use this appliance.`);
    }
  }
  useButton.addEventListener("click", useAppliance);
  

  //this function will handle paying back the advance amount
  function payBackAdvance() {
    advanceUsed = false;
    updateDisplay();
  }


  