status = "";
function setup()
{
    canvas = createCanvas(380, 340);
    canvas.position(500, 110);
    video = createCapture(VIDEO);
    video.size(380, 340);
    video.hide();
}

function start() 
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById('status').innerHTML = 'Status: Detecting Objects';
}

function modelLoaded() 
{
    console.log('Model Loaded !');
    status = true;
}

function draw() {
    image(video , 0 , 0 , 380 , 340);
}

