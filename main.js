rightWristX = "";
rightWristY = "";
rightScore = "";

function setup(){
    canvas = createCanvas(800,620);
    canvas.parent("canvas");
    video = createCapture(VIDEO);
    video.size(640,420);
    video.parent("game_console")

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
if(results.length > 0)
{
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    rightScore=results[0].pose.rightWrist.score;

}
}
function draw(){
if(rightScore>0.2){
    fill('#EE1717');
    stroke('#EE1717');
    circle( rightWristX , rightWristY , 15);
}
}