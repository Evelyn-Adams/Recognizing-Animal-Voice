function startClassification(){
navigator.mediaDevices.getUserMedia({audio=true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Cm8cPjp1I/',modelReady);
}

function modelReady(){
    console.log("Model Loaded")
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        r=Math.floor(Math.random() * 255) + 1;
        g=Math.floor(Math.random() * 255) + 1;
        b=Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML='I can hear the sound of '+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2) + '%';

        document.getElementById("result_label").style.color="rgb("+r +g +b +")";
        document.getElementById("result_confidence").style.color="rgb("+r +g +b +")";

        img=document.getElementById("img");
        ear=document.getElementById("ear");

        if(results[0].label = "CAT"){
            img.src="CAT.jpg";
        }else if(results[0].label = "DOG"){
            img.src="dog.jpg";
        }else if(results[0].label = "GOAT"){
            img.src="GOAT.png";
        }else{
            img.src="Ear.gif";
        }
    }
}