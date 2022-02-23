const hq = 42;
function distanceFromHqInBlocks(distance){
    if (distance > 42) {
        return distance - hq;
    } else if (distance < 42) {
        return hq - distance;
    }
}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)


function distanceFromHqInFeet(feet){
   return (distanceFromHqInBlocks(feet) * 264)
}
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)

function distanceTravelledInFeet(start, destination){
    if (destination > start) {
        return (destination - start) * 264;
    } else if (start > destination) {
        return (start - destination) * 264;
    }
}
distanceTravelledInFeet(43,48)
distanceTravelledInFeet(50,60)
distanceTravelledInFeet(34,28)

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000 ) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    } else (distanceTravelledInFeet(start, destination) > 2500); {
        return "cannot travel that far";
    }
}
calculatesFarePrice(34,32)
calculatesFarePrice(50,58)
calculatesFarePrice(34,24)