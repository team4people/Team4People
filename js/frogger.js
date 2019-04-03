//  * Constants *
const CANVAS = document.getElementById('canvas');
const CTX = canvas.getContext('2d');

var frog = {
    x: 425,
    y: 925
}

var log = {
    x: 25,
    y: 375,
}

var logArray = ['a','b','c'];

/*function createLogs(){

logArray.forEach({
  drawLog();
  logArray.push(log);
  log.y+= 25;
});

}*/

var onLog = false;

var gameover = false;

function drawFrog() {
    CTX.fillStyle = 'darkgreen';
    CTX.fillRect(frog.x, frog.y, 50, 50);
}

function drawLog() {
    CTX.fillStyle = '#472001';
    CTX.fillRect(log.x, log.y, 50, 50);
}

function drawCanvas() {
    CTX.fillStyle = 'green';
    CTX.fillRect(25, 25, CANVAS.width, 150);

    CTX.fillStyle = 'lightblue';
    CTX.fillRect(25, 175, CANVAS.width, 250);

    CTX.fillStyle = 'green';
    CTX.fillRect(25, 425, CANVAS.width, 150);

    CTX.fillStyle = '#3B3B3B';
    CTX.fillRect(25, 575, CANVAS.width, 250);

    CTX.fillStyle = 'green';
    CTX.fillRect(25, 825, CANVAS.width, 150);

    CTX.strokeStyle = 'black';
    CTX.lineWidth = 50;
    CTX.strokeRect(0, 0, CANVAS.width, CANVAS.height);
}

function checkWater() {
    if (onLog === false) {
        if (frog.y === 175 || frog.y === 225 || frog.y === 275 || frog.y === 325 || frog.y === 375) {
            console.log('WATER');
            gameover = true;
            console.log('Gameover: ' + gameover)
        }
    }
}

function checkLog() {
    if (frog.x === log.x && frog.y === log.y) {
        onLog = true;
        moveItem(frog);

}
    else {
        onLog = false;
    }
}


function moveItem(item) {
    if (item.x <= 925) {
        item.x += 50;
    }
    else {
        item.x = 25;
    }
}

function writeGameOver() {
    document.write('*Game Over*');
}

function main() {
    drawCanvas();
    drawLog();
  

    drawFrog();
    checkLog();
    checkFrog();
    checkWater();
    moveItem(log);

}

function checkFrog(){
  if (frog.x > 925)
  gameover = true;

}


interval = setInterval(() => {
    main();
    if (gameover === true) {
        clearInterval(interval);
        writeGameOver();
    }
}, 125);

document.addEventListener('keydown', (e) => {
    //console.log(e);
    if (e.code === 'ArrowUp') {
        if (frog.y > 25) {
            frog.y -= 50;
        }
        console.log('Frog Y: ' + frog.y);
    }

    if (e.code === 'ArrowDown') {
        if (frog.y < 925) {
            frog.y += 50;
        }
        console.log('Frog Y: ' + frog.y);
    }

    if (e.code === 'ArrowRight') {
        if (frog.x < 925) {
            frog.x += 50;
        }
        console.log('Frog X: ' + frog.x);
    }

    if (e.code === 'ArrowLeft') {
        if (frog.x > 25) {
            frog.x -= 50;
        }
        console.log('Frog X: ' + frog.x)
    }
})
