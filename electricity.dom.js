//DOM reference
const topupButton = document.querySelector('.btn.topupNow.mt1');
const useButton = document.querySelector('.btn.useNow.mt1');
const unitsAvailable = document.querySelector('.unitsAvailable');
const totalUnits = document.querySelector('.totalUnits');
const totalAmount = document.querySelector('.totalAmount');
const advanceTaken = document.querySelector('.advanceTaken');

// Factory Function instance
const electricity = Electricity();

// Retrieve stored values from local storage
const storedUnitsAvailable = localStorage.getItem('unitsAvailable');
const storedTotalUnits = localStorage.getItem('totalUnits');
const storedTotalAmount = localStorage.getItem('totalAmount');
const storedAdvanceTaken = localStorage.getItem('advanceTaken');

// Function to handle top-up
function topUpElectricity() {
    // Reference for radio button
    const amount = document.querySelector("input[name='buyElectricity']:checked").value;
    //conditional statement for top-up
    if (amount === '10') {
        electricity.topUpElectricity(10);
    } else if (amount === '20') {
        electricity.topUpElectricity(20);
    } else if (amount === '50') {
        electricity.topUpElectricity(50);
    }

    // Store updated values in local storage
    localStorage.setItem('unitsAvailable', electricity.getUnitsAvailable().toString());
    localStorage.setItem('totalUnits', electricity.totalUnitsBought().toString());
    localStorage.setItem('totalAmount', electricity.totalAmountSpent().toString());
    localStorage.setItem('advanceTaken', electricity.advanceTaken().toString());

    updateDisplay();
}

topupButton.addEventListener('click', topUpElectricity);

// Function that will reflect the current values of units available
function updateDisplay() {
    unitsAvailable.innerHTML = electricity.getUnitsAvailable();
    totalUnits.innerHTML = electricity.totalUnitsBought();
    totalAmount.innerHTML = electricity.totalAmountSpent();

    if (electricity.advanceTaken()) {
        advanceTaken.innerHTML = 'yes';
    } else {
        advanceTaken.innerHTML = '';
    }
    // Store current display values in local storage
    localStorage.setItem('unitsAvailableDisplay', unitsAvailable.innerHTML);
    localStorage.setItem('totalUnitsDisplay', totalUnits.innerHTML);
    localStorage.setItem('totalAmountDisplay', totalAmount.innerHTML);
    localStorage.setItem('advanceTakenDisplay', advanceTaken.innerHTML);

    // Retrieve stored display values from local storage
    localStorage.getItem('unitsAvailableDisplay');
    localStorage.getItem('totalUnitsDisplay');
    localStorage.getItem('totalAmountDisplay');
    localStorage.getItem('advanceTakenDisplay');


}

// This function will handle the usage of appliances, checking if there are enough units
function useAppliance() {
    const appliance = document.querySelector("input[name='useElectricity']:checked").value;

    let applianceUsed = electricity.useAppliance(appliance);
    if (applianceUsed) {
        updateDisplay();
        alert(`Appliance used successfully.`);
    } else {
        alert(`Not enough units available to use this appliance.`);
    }
}

useButton.addEventListener('click', useAppliance);

// This function will handle paying back the advance amount
function payAdvance() {
    electricity.payAdvance();

    // Store updated values in local storage
    localStorage.setItem('unitsAvailable', electricity.getUnitsAvailable().toString());
    localStorage.setItem('totalUnits', electricity.totalUnitsBought().toString());
    localStorage.setItem('totalAmount', electricity.totalAmountSpent().toString());
    localStorage.setItem('advanceTaken', electricity.advanceTaken().toString());

    updateDisplay();
}


