nosex = 0;
nosey = 0;

function preload(){
noseimage = loadImage("https://i.postimg.cc/yxbZzrF2/clown-nose.png");
}

function draw(){
image(video,0,0,300,300);
//fill("red");
//stroke("red");
//circle(nosex,nosey,30);
image(noseimage,nosex,nosey,25,25);
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotPoses(results){
    if(results.length > 0){
       console.log(results)
       nosex = results[0].pose.nose.x-12.5;
       nosey = results[0].pose.nose.y-12.5;
    }
}

function take_snapshot(){
    save("filtered_picture.png");
}

