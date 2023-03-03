var maxDistance, minDistance;
var maxDistancePad, minDistancePad;
var randomAngle, randomDistance; 
var x, y;

//placeholder definition
maxDistance = 150;
minDistance = 70;

maxDistancePad = maxDistance + 1
minDistancePad = Math.max(0, minDistance - 1)

//angle distance method
var remainingAreaRatio = (minDistancePad / maxDistancePad) ** 2;

do{
    randomAngle = Math.random() * Math.PI
    randomDistance = maxDistancePad * Math.sqrt(1 - (1 - remainingAreaRatio) * Math.random())

    x = Math.round(Math.cos(randomAngle) * randomDistance)
    y = Math.round(Math.sin(randomAngle) * randomDistance)
} while (x**2 + y**2 < minDistance**2 || x**2 + y**2 > maxDistance**2);

console.log("Next tile : [" + x + "/" + y + "]");