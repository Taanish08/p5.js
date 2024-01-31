

function preload() {

}

function setup() {
canvas=createCanvas(640,480);
canvas.position(110,350);

video=createCapture(VIDEO);
video.hide();
color1=" " ;

}

function draw() {
image(video, 0, 0, 640,480);
tint(color1)
}

function take_snapshot() {
save('filer_picture.png');
}

function apply() {
color1=document.getElementById("textbox").value;
}