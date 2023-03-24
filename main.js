




leftwrist_x=0;
rightwrist_x=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,model_loaded);
    posenet.on('pose',got_poses);
}

function model_loaded(){
    console.log("posenet is initiated.");
}

function got_poses(results)
{
    console.log("hi"); 
    if(results.length > 0){    
    
        console.log(results);
        leftwrist_x=results[0].pose.leftWrist.x;
        rightwrist_x=results[0].pose.rightWrist.x;
        difference=floor(leftwrist_x-rightwrist_x);   
    
    }   
}   

function draw(){
    background("white");
    document.getElementById("font_size").innerHTML="Font size of the text will be " + difference + "px";
    textSize(difference);
    fill("red");
    text("Aeon",50,300);
}