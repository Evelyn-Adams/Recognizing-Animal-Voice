function startClassification(){
navigator.mediaDevices.getUserMedia({audio=true});
classifier=ml5.soundClassifier('',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    console.log("Got Resuls")
}