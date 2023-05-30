function Electricity() {
    let unitsAvailable = 0;
    let advanceHasTaken = false;
    const advanceAmount = 30;
    const advanceUnits = 21;
    let advancePaid = false;
    let totalAmount = 0;
    let unitBought = 0;


    function topUpElectricity(amount) {
        if (amount === 10) {
            unitsAvailable += 7;
            totalAmount += 10;
            unitBought += 7
        } else if (amount === 20) {
            unitsAvailable += 14;
            totalAmount += 20;
            unitBought += 14
        } else if (amount === 50) {
            unitsAvailable += 35;
            totalAmount += 50;
            unitBought += 35;
        } 
        else if (amount === 'advance' && !advanceHasTaken) {
            unitsAvailable += advanceUnits;
            advancePaid = false
            advanceHasTaken = true;
            unitBought += advanceUnits
        }

    }

    function getUnitsAvailable() {
        return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        let unitsNeeded = 0;

        switch (appliance) {
            case 'TV':
                unitsNeeded = 3;
                break;
            case 'Kettle':
                unitsNeeded = 5;
                break;
            case 'Fridge':
                unitsNeeded = 13;
                break;
            case 'Stove':
                unitsNeeded = 10;
                break;
        }
        if (unitsAvailable >= unitsNeeded) {
            unitsAvailable -= unitsNeeded;
            return true;
        } else {
            return false;
        }
    }

    function advanceTaken(amount) {
        
        return advanceHasTaken && !advancePaid;
      
    }

    function totalAmountSpent() {
        return totalAmount;
    }

    function totalUnitsBought() {
        return unitBought;
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought

    }
}

 // do we want to go with this or array? 
 let appliances = {
    'Stove': 10,
    'Kettle': 5,
    'TV': 3,
    'Fridge': 13
};