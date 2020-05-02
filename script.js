function loadJSON(files){
  if (files.length <= 0) {
    return false;
  }

  let fr = new FileReader();
  
  fr.onload = function(e) { 
    var result = JSON.parse(e.target.result);
    var formatted = JSON.stringify(result, null, 2);
    document.getElementById('result').innerHTML = formatted;
    console.log(result);
  }
  
  console.log("Attempting to load "+files[0].name);
  fr.readAsText(files.item(0));
}

function compute(JSONToParse){
    let placeVisit = [];
    for (i in JSONToParse.timelineObjects){
      if (JSONToParse.timelineObjects[i].hasOwnProperty('placeVisit')){
          let latitude = JSONToParse.timelineObjects[i].placeVisit.location.latitudeE7;
          let longitude = JSONToParse.timelineObjects[i].placeVisit.location.longitudeE7;
          let startTime = JSONToParse.timelineObjects[i].placeVisit.duration.startTimestampMs;
          let endTime = JSONToParse.timelineObjects[i].placeVisit.duration.endTimestampMs;

          placeVisit.push({latitude:latitude,longitude:longitude,startTime:startTime,endTime:endTime});
      }
    }
}

/*
let patient = [{latitude:438250504, longitude:-793731613, startTime:1585789139637, endTime:1586380498044}];
let commonLocations = []

for(i in patient)
{
  for(j in placeVisit)
  {
    const bounds = 3000
    let latLowerBound = Math.abs(i.latitude) - bounds;
    let latUpperBound = Math.abs(i.latitude) + bounds;
    let longLowerBound = Math.abs(i.longitude) - bounds;
    let longUpperBound = Math.abs(i.longitude) + bounds;
    if(j.latitude)
  }
}

*/