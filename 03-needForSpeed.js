function needForSpeed(arr){
    function removeCar(myCars, carName) {
        return myCars.filter(c => c[nameKey] !== carName);
    }
    const nameKey = "Name";
    const mileageKey = "Mileage";
    const fuelKey = "Fuel";
    const maxMileage = 100000;
    const maxFuelCapacity = 75;
    const minMileage = 10000;
    const carNumbers = Number(arr[0]);
    let myCars = [];
    for(let i = 1; i <= carNumbers; i++){
        let carArgs = arr[i].split("|");
        
        let carName = carArgs[0];
        let carMileage = Number(carArgs[1]);
        let carFuel = Number(carArgs[2]);

        let carObj = { }
            carObj[nameKey] = carName,
            carObj[mileageKey] = carMileage,
            carObj[fuelKey] = carFuel,

            myCars.push(carObj);
    }
    for (let i = carNumbers + 1; i < arr.length; i++) {
        let cmdArg = arr[i].split(' : ');

        let cmdType = cmdArg[0];
        if (cmdType === "Stop") {
            break;
        }
        let carName = cmdArg[1];
        let cars = myCars.find(c =>c[nameKey] === carName);
        if (cmdType === "Drive") {
            let distance = Number(cmdArg[2]);
            let fuelNeeded = Number(cmdArg[3]);

            if (fuelNeeded > cars[fuelKey]) {
                console.log("Not enough fuel to make that ride");
                continue;
            }
            cars[fuelKey] -= fuelNeeded;
            cars[mileageKey] +=distance;

            console.log(`${carName} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);

            if (cars[mileageKey] >= maxMileage) {
                myCars = removeCar(myCars, carName);
                console.log(`Time to sell the ${carName}!`);
            }
        } else if (cmdType === "Refuel") {
            let refuelamount = Number(cmdArg[2]);

            if (cars[fuelKey] + refuelamount > maxFuelCapacity) {
                refuelamount = 75 - cars[fuelKey];
            }
            cars[fuelKey] += refuelamount;

            console.log(`${carName} refueled with ${refuelamount} liters`);
        } else if (cmdType === "Revert") {
            let revertMileageKm = Number(cmdArg[2]);
            cars[mileageKey] -= revertMileageKm;
            if (cars[mileageKey] < minMileage) {
                cars[mileageKey] = minMileage;
            }
            console.log(`${carName} mileage decreased by ${revertMileageKm} kilometers`);
        }
    }
    for (const car of myCars) {
        console.log(`${car[nameKey]} -> Mileage: ${car[mileageKey]} kms, Fuel in the tank: ${car[fuelKey]} lt.`);
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
    ])