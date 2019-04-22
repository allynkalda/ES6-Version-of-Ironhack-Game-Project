console.log("fuck");

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');



c.fillStyle = "green";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "pink";
c.fillRect(300, 300, 100, 100);
c.fillStyle = "purple";
c.fillRect(500, 500, 100, 100);

console.log(canvas);


// Line

c.beginPath();
c.moveTo(100, 500);
c.lineTo(400, 500);
c.lineTo(200, 300);
c.lineTo(400, 200);
c.strokeStyle = "red";
c.stroke();

// Arc / Circle

for (var i = 0; i < 50; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
}

var x = 200;

function animate() {
    c.clearRect(0, 0, innerWidth, innerHeight);

    requestAnimationFrame(animate);
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();

    x += i;
}

animate();