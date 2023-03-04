function generateTile(){
    var maxDistance, minDistance;
    var maxDistancePad, minDistancePad;
    var randomAngle, randomDistance; 
    var x, y;
    
    minDistance = +document.getElementById("minDistance").value;
    maxDistance = +document.getElementById("maxDistance").value;

    if(maxDistance < minDistance){
        [maxDistance, minDistance] = [minDistance, maxDistance];
    }

    maxDistancePad = maxDistance + 1
    minDistancePad = Math.max(0, minDistance - 1)

    //angle distance method
    var remainingAreaRatio = (minDistancePad / maxDistancePad) ** 2;

    do{
        randomAngle = Math.random() * Math.PI * 2
        randomDistance = maxDistancePad * Math.sqrt(1 - (1 - remainingAreaRatio) * Math.random())

        x = Math.round(Math.cos(randomAngle) * randomDistance)
        y = Math.round(Math.sin(randomAngle) * randomDistance)
    } while (x**2 + y**2 < minDistance**2 || x**2 + y**2 > maxDistance**2);
    
    document.getElementById("result").innerHTML = "[" + x + "/" + y + "]";
}
