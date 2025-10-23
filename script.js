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

    //determine the rough direction (drawing coordinates: y goes down)
    var arrowEmote, clockEmote;
    if(x==0 && y==0){
        arrowEmote = "&#x23fa"
        clockEmote = "&#x23fa"
    } else if(x==0){
        arrowEmote = (y>0)?"&#x2b07":"&#x2b06"
        clockEmote = (y>0)?"&#x1f555":"&#x1f55B"
    } else if(y==0){
        arrowEmote = (x>0)?"&#x27a1":"&#x2b05"
        clockEmote = (x>0)?"&#x1f552":"&#x1f558"
    } else {
        arrowEmote = ["&#x2198","&#x2199","&#x2196","&#x2197"][Math.floor(randomAngle * 2 / Math.PI)]
        clockEmote = ["&#x1f553","&#x1f554","&#x1f556","&#x1f557","&#x1f559","&#x1f55A","&#x1f550","&#x1f551"][Math.floor(randomAngle * 4 / Math.PI)];
    }
    
    document.getElementById("result").innerHTML = arrowEmote+ " [" + x + "/" + y + "] " + clockEmote;
}
