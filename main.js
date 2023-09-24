
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    circle(30, 30, 100);
    circle(130, 30, 100);
    circle(230, 30, 100);
    circle(330, 30, 100);
    circle(430, 30, 100);
    circle(530, 30, 100);
    circle(630, 30, 100);
    circle(630, 130, 100);
    circle(630, 230, 100);
    circle(630, 330, 100);
    circle(630, 430, 100);
    circle(530, 430, 100);
    circle(430, 430, 100);
    circle(330, 430, 100);
    circle(230, 430, 100);
    circle(130, 430, 100);
    circle(30, 430, 100);
    circle(30, 330, 100);
    circle(30, 230, 100);
    circle(30, 130, 100);
    circle(30, 30, 100);
}

function take_snapshot() {
    save('student_name.png');
}

