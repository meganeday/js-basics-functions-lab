// Code your solution in this file!
let distanceMeasuredInBlocks;

// returns the number of blocks from Scuber's to the pickup location
function distanceFromHqInBlocks(location) {
    if (location > 42) {
        distanceMeasuredInBlocks = location - 42;
    } else if (location < 42) {
        distanceMeasuredInBlocks = 42 - location;
    } else if (location === 0) {
        distanceMeasuredInBlocks = 0;
    }
    return distanceMeasuredInBlocks;
}


// returns the number of feet from Scuber's to the pickup location
function distanceFromHqInFeet(location) {
    if (location > 42) {
        distanceMeasuredInBlocks = location - 42;
    } else if (location < 42) {
        distanceMeasuredInBlocks = 42 - location;
    } else if (location === 0) {
        distanceMeasuredInBlocks = 0;
    }
    let distanceMeasuredInFeet = distanceMeasuredInBlocks * 264;
    return distanceMeasuredInFeet;
}

let distance;

// calculates the number of feet a passenger travels given a starting block and ending block
function distanceTravelledInFeet(start, end) {
    if (start > end) {
        distance = (start - end) * 264;
    } else if (start < end) {
        distance = (end - start) * 264;
    } else if (start === end) {
        distance = 0;
    }
    return distance; 
}

// given the same starting and ending block, return the fare for the customer where 
// the first 100 feet are free 
function calculatesFarePrice(start, end) {
    if (start > end) {
        distance = (start - end) * 264;
    } else if (start < end) {
        distance = (end - start) * 264;
    } else if (start === end) {
        distance = 0;
    }
    let farePrice;
    if (distance <= 400) {
        farePrice = 0;
        return farePrice;
    } else if (distance > 400, distance < 2000) {
        farePrice = (.02 * distance) - 8;
        return parseFloat(farePrice.toFixed(2)); 
    } else if (distance > 2000, distance < 2500) {
        farePrice = 25.00;
        return farePrice;
    } else if (distance > 2500) {
        farePrice = "cannot travel that far";
        return farePrice;
    }
}