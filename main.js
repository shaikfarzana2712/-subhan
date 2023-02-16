noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)

    canvas = createCanvas(550, 500)
    canvas.position(560, 150)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw() {
    background('#969A97');
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference + "px";
    textSize(difference);
    fill('#FFE787');
    text('subhan', 50, 400)
}

function modelLoaded() {
    console.log('postNet Is Initialized!')
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("noseX=" + noseX + "noseY=" + noseY)

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}