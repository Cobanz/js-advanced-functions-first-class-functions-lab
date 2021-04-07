// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

selectingDrivers()

function createFareMultiplier(multiply) {
    return function (int) {
        return multiply * int;
    }
}

createFareMultiplier()

function fareDoubler(int) {return int*2}

function fareTripler(int) {return int*3}


function selectDifferentDrivers(drivers, driversReturn) {
    return driversReturn(drivers)
}