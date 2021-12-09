var dog = 0;
var cat = 0;
var cow = 0;
var lion = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('')
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*225) + 1;
        random_number_g = Math.floor(Math.random()*225) + 1;
        random_number_b = Math.floor(Math.random()*225) + 1;
        document.getElementById("time_noise").innerHTML = "Dog Detected -"+dog+"Cat Detected - "+cat+" Cow Detected - "+cow+" Lion Detected -"+lion;
        document.getElementById("time_noise").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("time_noise").innerHTML = "Detected Voice : "+results[0].label;
        document.getElementById("time_noise").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("image");

        if (results[0].label == "barking"){
            img.src = 'https://c.tenor.com/ZndppWg-X38AAAAM/dog-waiting.gif';
            dog = dog + 1;
        }
            else if (results[0].label == "meowing"){
                img.src = 'https://cdn.dribbble.com/users/6620596/screenshots/14792345/media/af61fa935b055891cb800a9e41ebb747.gif';
                cat = cat + 1;
            }
                else if (results[0].label == "mooing"){
                    img.src = 'https://cdn.dribbble.com/users/2181348/screenshots/6270781/cow_gif.gif';
                    cow = cow + 1;
                }
                    else(results[0].label == "roaring"){
                    img.src = 'https://data.whicdn.com/images/328466550/original.gif';
                    lion = lion + 1;}
                    
    }
}